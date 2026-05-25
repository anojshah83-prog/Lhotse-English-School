import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-Memory Database for Lhotse English School (Estd. 2049, Mechinagar-9, Dhulabari Jhapa)
const db = {
  students: [
    { id: "stud_1", name: "Aarav Sharma", rollNo: 12, grade: "10 A", parentId: "parent_1", email: "aarav@lhotse.edu.np", avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&h=200&fit=crop", attendance: 92 },
    { id: "stud_2", name: "Ananya Pradhan", rollNo: 5, grade: "10 A", parentId: "parent_2", email: "ananya@lhotse.edu.np", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop", attendance: 96 },
    { id: "stud_3", name: "Bipin Thapa", rollNo: 8, grade: "10 A", parentId: "parent_3", email: "bipin@lhotse.edu.np", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop", attendance: 85 }
  ],
  teachers: [
    { id: "teach_1", name: "Mrs. Sunita Adhikari", subject: "Compulsory Mathematics", classTeacherOf: "10 A", email: "sunita@lhotse.edu.np", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" },
    { id: "teach_2", name: "Mr. Ramesh Bhattarai", subject: "Compulsory Science", classTeacherOf: null, email: "ramesh@lhotse.edu.np", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" },
    { id: "teach_3", name: "Mrs. Geeta Dahal", subject: "English", classTeacherOf: null, email: "geeta@lhotse.edu.np", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop" }
  ],
  parents: [
    { id: "parent_1", name: "Mr. Rajesh Sharma", childIds: ["stud_1"], email: "rajesh.sharma@gmail.com", relation: "Father", contact: "+977-98526XXXXX" },
    { id: "parent_2", name: "Mr. Hari Pradhan", childIds: ["stud_2"], email: "hari.pradhan@gmail.com", relation: "Father", contact: "+977-98426XXXXX" },
    { id: "parent_3", name: "Mr. Shyam Thapa", childIds: ["stud_3"], email: "shyam.thapa@gmail.com", relation: "Father", contact: "+977-98126XXXXX" }
  ],
  routines: [
    { day: "Sunday", periods: [
      { time: "10:00 - 10:45", subject: "Compulsory Mathematics", teacher: "Mrs. Sunita Adhikari", room: "301" },
      { time: "10:45 - 11:30", subject: "Compulsory Science", teacher: "Mr. Ramesh Bhattarai", room: "301" },
      { time: "11:45 - 12:30", subject: "English", teacher: "Mrs. Geeta Dahal", room: "301" },
      { time: "12:30 - 01:15", subject: "Nepali", teacher: "Mr. K.P. Oli", room: "301" },
      { time: "02:00 - 02:40", subject: "Social Studies", teacher: "Miss Rita Joshi", room: "301" },
      { time: "02:40 - 03:20", subject: "Computer Science", teacher: "Mr. Sunil Giri", room: "Lab B" }
    ]},
    { day: "Monday", periods: [
      { time: "10:00 - 10:45", subject: "Compulsory Mathematics", teacher: "Mrs. Sunita Adhikari", room: "301" },
      { time: "10:45 - 11:30", subject: "Compulsory Science", teacher: "Mr. Ramesh Bhattarai", room: "301" },
      { time: "11:45 - 12:30", subject: "English", teacher: "Mrs. Geeta Dahal", room: "301" },
      { time: "12:30 - 01:15", subject: "Nepali", teacher: "Mr. K.P. Oli", room: "301" },
      { time: "02:00 - 02:40", subject: "HPE (Health & Physical)", teacher: "Mr. Hari Shrestha", room: "Ground" },
      { time: "02:40 - 03:20", subject: "Social Studies", teacher: "Miss Rita Joshi", room: "301" }
    ]},
    { day: "Tuesday", periods: [
      { time: "10:00 - 10:45", subject: "Compulsory Mathematics", teacher: "Mrs. Sunita Adhikari", room: "301" },
      { time: "10:45 - 11:30", subject: "Compulsory Science", teacher: "Mr. Ramesh Bhattarai", room: "301" },
      { time: "11:45 - 12:30", subject: "English", teacher: "Mrs. Geeta Dahal", room: "301" },
      { time: "12:30 - 01:15", subject: "Nepali", teacher: "Mr. K.P. Oli", room: "301" },
      { time: "02:00 - 02:40", subject: "Computer Science", teacher: "Mr. Sunil Giri", room: "Lab B" },
      { time: "02:40 - 03:20", subject: "Extra-Curricular", teacher: "Miss Rita Joshi", room: "Hall" }
    ]},
    { day: "Wednesday", periods: [
      { time: "10:00 - 10:45", subject: "Compulsory Mathematics", teacher: "Mrs. Sunita Adhikari", room: "301" },
      { time: "10:45 - 11:30", subject: "Compulsory Science", teacher: "Mr. Ramesh Bhattarai", room: "301" },
      { time: "11:45 - 12:30", subject: "English", teacher: "Mrs. Geeta Dahal", room: "301" },
      { time: "12:30 - 01:15", subject: "Nepali", teacher: "Mr. K.P. Oli", room: "301" },
      { time: "02:00 - 02:40", subject: "Social Studies", teacher: "Miss Rita Joshi", room: "301" },
      { time: "02:40 - 03:20", subject: "Self Study/Reading", teacher: "Mrs. Sunita Adhikari", room: "Library" }
    ]},
    { day: "Thursday", periods: [
      { time: "10:00 - 10:45", subject: "Compulsory Mathematics", teacher: "Mrs. Sunita Adhikari", room: "301" },
      { time: "10:45 - 11:30", subject: "Compulsory Science", teacher: "Mr. Ramesh Bhattarai", room: "301" },
      { time: "11:45 - 12:30", subject: "English", teacher: "Mrs. Geeta Dahal", room: "301" },
      { time: "12:30 - 01:15", subject: "Social Studies", teacher: "Miss Rita Joshi", room: "301" },
      { time: "02:00 - 02:40", subject: "Computer Science", teacher: "Mr. Sunil Giri", room: "Lab B" },
      { time: "02:40 - 03:20", subject: "Art & Craft", teacher: "Mrs. Geeta Dahal", room: "Art Room" }
    ]},
    { day: "Friday", periods: [
      { time: "10:00 - 10:45", subject: "Compulsory Mathematics", teacher: "Mrs. Sunita Adhikari", room: "301" },
      { time: "10:45 - 11:30", subject: "Compulsory Science", teacher: "Mr. Ramesh Bhattarai", room: "301" },
      { time: "11:45 - 12:30", subject: "Weekly Quiz / Test", teacher: "Mrs. Sunita Adhikari", room: "Assembly Hall" }
    ]}
  ],
  assignments: [
    { id: "assign_1", subject: "Compulsory Mathematics", title: "Algebraic Fractions Exercise 5.2", description: "Complete questions 1 to 10 in your homework notebook. Show standard step-by-step simplification formulas.", dueDate: "2026-05-25", totalPoints: 10, grade: "10 A", author: "Mrs. Sunita Adhikari" },
    { id: "assign_2", subject: "Compulsory Science", title: "Newton's Second Law Essay", description: "Write an essay (300-400 words) describing the secondary law with at least 3 industrial or real-life application cases. Run through AI generator to practice guidelines.", dueDate: "2026-05-27", totalPoints: 20, grade: "10 A", author: "Mr. Ramesh Bhattarai" },
    { id: "assign_3", subject: "English", title: "Summary of 'The Tree' Novel Chapter 4", description: "Write a brief summaries explaining how character motivation changed in Chapter 4.", dueDate: "2026-05-26", totalPoints: 15, grade: "10 A", author: "Mrs. Geeta Dahal" }
  ],
  notices: [
    { id: "notice_1", title: "Joint Parent-Teacher Meeting on Jestha 15", sender: "Principal's Office", date: "2026-05-24", content: "Dear Parents/Guardians, Lhotse English School notices that a vital discussion meet is scheduled to assess class performance, discipline metrics, and first-term progress. All are humble requested to attend.", keyPoints: ["Date: Jestha 15, 2083", "Time: 11:00 AM onwards", "Venue: Primary Wing Hall"], priority: "Urgent" },
    { id: "notice_2", title: "Inter-School Sports Meet 2083 Registration", sender: "Sports Coordinator", date: "2026-05-22", content: "Registration is now open for athletics, table tennis, soccer and chess categories. Interested candidates should register name entries through class monitors.", keyPoints: ["Deadline: Jestha 5, 2083", "Fee: Free registration", "Matches begin: Jestha 10"], priority: "Calendar" }
  ],
  attendanceLogs: [
    { date: "2026-05-24", studentId: "stud_1", status: "Present" },
    { date: "2026-05-24", studentId: "stud_2", status: "Present" },
    { date: "2026-05-24", studentId: "stud_3", status: "Absent" },
    { date: "2026-05-23", studentId: "stud_1", status: "Present" },
    { date: "2026-05-23", studentId: "stud_2", status: "Present" },
    { date: "2026-05-23", studentId: "stud_3", status: "Present" },
    { date: "2026-05-22", studentId: "stud_1", status: "Late" },
    { date: "2026-05-22", studentId: "stud_2", status: "Present" },
    { date: "2026-05-22", studentId: "stud_3", status: "Present" },
    { date: "2026-05-21", studentId: "stud_1", status: "Present" },
    { date: "2026-05-21", studentId: "stud_2", status: "Present" },
    { date: "2026-05-21", studentId: "stud_3", status: "Present" }
  ],
  grades: [
    // Aarav Sharma (stud_1)
    { id: "g_1", studentId: "stud_1", subject: "Compulsory Mathematics", firstTerm: 95, midTerm: 92, finalTerm: 96, remarks: "Outstanding problem solving ability." },
    { id: "g_2", studentId: "stud_1", subject: "Compulsory Science", firstTerm: 72, midTerm: 75, finalTerm: 78, remarks: "Understand concepts but needs practice in derivations." },
    { id: "g_3", studentId: "stud_1", subject: "English", firstTerm: 82, midTerm: 80, finalTerm: 85, remarks: "Good grammar and articulation skills." },
    { id: "g_4", studentId: "stud_1", subject: "Nepali", firstTerm: 68, midTerm: 71, finalTerm: 70, remarks: "Focus on literary interpretation and spellings." },
    { id: "g_5", studentId: "stud_1", subject: "Social Studies", firstTerm: 78, midTerm: 82, finalTerm: 80, remarks: "Active group participation." },
    
    // Ananya Pradhan (stud_2)
    { id: "g_6", studentId: "stud_2", subject: "Compulsory Mathematics", firstTerm: 89, midTerm: 91, finalTerm: 93, remarks: "Brilliant algebraic concepts." },
    { id: "g_7", studentId: "stud_2", subject: "Compulsory Science", firstTerm: 94, midTerm: 95, finalTerm: 96, remarks: "Inquisitive student, writes neat scientific notes." },
    { id: "g_8", studentId: "stud_2", subject: "English", firstTerm: 95, midTerm: 97, finalTerm: 98, remarks: "Exceptional language flow and vocabulary." },
    { id: "g_9", studentId: "stud_2", subject: "Nepali", firstTerm: 88, midTerm: 89, finalTerm: 91, remarks: "Very clean handwriting and strong content structure." },
    { id: "g_10", studentId: "stud_2", subject: "Social Studies", firstTerm: 90, midTerm: 92, finalTerm: 91, remarks: "Well informed about contemporary events." },
    
    // Bipin Thapa (stud_3)
    { id: "g_11", studentId: "stud_3", subject: "Compulsory Mathematics", firstTerm: 70, midTerm: 72, finalTerm: 75, remarks: "Helpful student, needs to practice homework regularly." },
    { id: "g_12", studentId: "stud_3", subject: "Compulsory Science", firstTerm: 65, midTerm: 68, finalTerm: 71, remarks: "Needs support in laboratory practicals." },
    { id: "g_13", studentId: "stud_3", subject: "English", firstTerm: 78, midTerm: 75, finalTerm: 79, remarks: "Good spoken English, improve report drafting." },
    { id: "g_14", studentId: "stud_3", subject: "Nepali", firstTerm: 62, midTerm: 65, finalTerm: 68, remarks: "Needs persistent efforts to catch up spellings." },
    { id: "g_15", studentId: "stud_3", subject: "Social Studies", firstTerm: 72, midTerm: 75, finalTerm: 74, remarks: "Attentive during interactive lessons." }
  ],
  messages: [
    { id: "m_1", parentId: "parent_1", teacherId: "teach_1", sender: "parent", timestamp: "2026-05-23T08:30:00Z", message: "Namaste Mrs. Sunita, I noticed Aarav is scoring a bit low in his Nepali tests relative to mathematics. Is there any tutoring help he needs?" },
    { id: "m_2", parentId: "parent_1", teacherId: "teach_1", sender: "teacher", timestamp: "2026-05-23T10:15:00Z", message: "Namaste Mr. Rajesh. Aarav is excellent in Math class! In Nepali, he gets a bit slow while writing responses. I suggest a weekly self-reading routine. I am also supporting him directly." },
    { id: "m_3", parentId: "parent_1", teacherId: "teach_1", sender: "parent", timestamp: "2026-05-23T11:00:00Z", message: "Thank you for the update. We will make him practice reading daily at home. Best regards." }
  ],
  billing: [
    { id: "bill_1", parentId: "parent_1", title: "Grade 10 First Term Tuition Fees", amount: 15500, dueDate: "2026-05-10", paidDate: "2026-05-08", status: "Paid", items: ["Tuition Fee: Rs. 12000", "Science Lab Fee: Rs. 1500", "Computer Lab Fee: Rs. 2000"] },
    { id: "bill_2", parentId: "parent_1", title: "Transportation & Lunch Charges - Baisakh", amount: 6500, dueDate: "2026-05-30", paidDate: null, status: "Unpaid", items: ["Bus Fare (Dhulabari Routing): Rs. 3500", "Cafeteria Lunch Fee: Rs. 3000"] },
    { id: "bill_3", parentId: "parent_2", title: "Grade 10 First Term Tuition Fees", amount: 15500, dueDate: "2026-05-10", paidDate: "2026-05-09", status: "Paid", items: ["Tuition Fee: Rs. 12000", "Science Lab Fee: Rs. 1500", "Computer Lab Fee: Rs. 2000"] },
    { id: "bill_4", parentId: "parent_3", title: "Grade 10 First Term Tuition Fees", amount: 15500, dueDate: "2026-05-10", paidDate: null, status: "Unpaid", items: ["Tuition Fee: Rs. 12000", "Science Lab Fee: Rs. 1500", "Computer Lab Fee: Rs. 2000"] }
  ]
};

// Lazy initialization pattern for Gemini AI to avoid server crashes if key is omitted
let geminiClientCache: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not set. Please add it via Secrets configuration.");
  }
  if (!geminiClientCache) {
    geminiClientCache = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  }
  return geminiClientCache;
}

// REST API Endpoints

// 1. Fetch entire database state
app.get("/api/data", (req, res) => {
  res.json(db);
});

// 2. Multi-Attendance Submission
app.post("/api/attendance", (req, res) => {
  const { date, attendanceArray } = req.body; // array of { studentId, status }
  if (!date || !attendanceArray || !Array.isArray(attendanceArray)) {
    return res.status(400).json({ error: "Missing date or attendanceArray (must be array)" });
  }

  // Clear existing attendance entries for this date if any to prevent duplicates
  db.attendanceLogs = db.attendanceLogs.filter(log => log.date !== date);

  // Add new entries
  attendanceArray.forEach((item: { studentId: string; status: "Present" | "Absent" | "Late" }) => {
    db.attendanceLogs.push({
      date,
      studentId: item.studentId,
      status: item.status
    });
  });

  // Re-calculate attendance percentages
  db.students.forEach(student => {
    const logs = db.attendanceLogs.filter(log => log.studentId === student.id);
    const presentCount = logs.filter(log => log.status === "Present" || log.status === "Late").length;
    student.attendance = logs.length > 0 ? Math.round((presentCount / logs.length) * 100) : 100;
  });

  res.json({ success: true, message: `Attendance for ${date} marked successfully!`, attendanceLogs: db.attendanceLogs });
});

// 3. Create Homework Assignment
app.post("/api/assignment", (req, res) => {
  const { subject, title, description, dueDate, totalPoints, author } = req.body;
  if (!subject || !title || !description || !dueDate) {
    return res.status(400).json({ error: "Required fields missing" });
  }

  const newAssignment = {
    id: `assign_${Date.now()}`,
    subject,
    title,
    description,
    dueDate,
    totalPoints: totalPoints || 10,
    grade: "10 A",
    author: author || "Mrs. Sunita Adhikari"
  };

  db.assignments.unshift(newAssignment);
  res.json({ success: true, assignment: newAssignment });
});

// 4. Submit Student Exam Scores
app.post("/api/grades", (req, res) => {
  const { studentId, subject, scoreType, value, remarks } = req.body;
  if (!studentId || !subject || !scoreType || value === undefined) {
    return res.status(400).json({ error: "Missing required fields for score entry" });
  }

  let gradeRecord = db.grades.find(g => g.studentId === studentId && g.subject === subject);
  
  if (!gradeRecord) {
    gradeRecord = {
      id: `g_${Date.now()}`,
      studentId,
      subject,
      firstTerm: 0,
      midTerm: 0,
      finalTerm: 0,
      remarks:remarks || ""
    };
    db.grades.push(gradeRecord);
  }

  if (scoreType === "firstTerm") gradeRecord.firstTerm = Number(value);
  if (scoreType === "midTerm") gradeRecord.midTerm = Number(value);
  if (scoreType === "finalTerm") gradeRecord.finalTerm = Number(value);
  if (remarks) gradeRecord.remarks = remarks;

  res.json({ success: true, record: gradeRecord });
});

// 5. Create Noticeboard announcement
app.post("/api/notices", (req, res) => {
  const { title, sender, content, keyPoints, priority } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const newNotice = {
    id: `notice_${Date.now()}`,
    title,
    sender: sender || "Principal's Office",
    date: new Date().toISOString().split('T')[0],
    content,
    keyPoints: Array.isArray(keyPoints) ? keyPoints : [],
    priority: priority || "Info"
  };

  db.notices.unshift(newNotice);
  res.json({ success: true, notice: newNotice });
});

// 6. Message Center
app.post("/api/messages", (req, res) => {
  const { parentId, teacherId, sender, message } = req.body;
  if (!parentId || !teacherId || !sender || !message) {
    return res.status(400).json({ error: "Missing sender context or message text" });
  }

  const newMsg = {
    id: `m_${Date.now()}`,
    parentId,
    teacherId,
    sender,
    timestamp: new Date().toISOString(),
    message
  };

  db.messages.push(newMsg);
  res.json({ success: true, message: newMsg });
});

// 7. Generate Admin Billing Invoice
app.post("/api/billing", (req, res) => {
  const { parentId, title, amount, dueDate, items } = req.body;
  if (!parentId || !title || !amount || !dueDate) {
    return res.status(400).json({ error: "Billing details missing" });
  }

  const newBill = {
    id: `bill_${Date.now()}`,
    parentId,
    title,
    amount: Number(amount),
    dueDate,
    paidDate: null,
    status: "Unpaid" as const,
    items: Array.isArray(items) ? items : [`Base fee: Rs. ${amount}`]
  };

  db.billing.push(newBill);
  res.json({ success: true, billing: newBill });
});

// AI Capability Interfaces Powered by Gemini 3.5 Flash Model

// AI Feature 1: Smart Study Planner
app.post("/api/ai/study-planner", async (req, res) => {
  try {
    const { studentName, weakSubjects, examDate, targetGrade } = req.body;
    if (!weakSubjects || weakSubjects.length === 0) {
      return res.status(400).json({ error: "Provide at least one subject to generate planner." });
    }

    const ai = getGeminiClient();

    const promptText = `Provide a meticulous, encouragement-filled personalized weekly study calendar grid for a student named ${studentName || "Aarav Sharma"}.
They are prepping for Grade 10 exams at Lhotse English School, Estd. 2049, Mechinagar-9, Jhapa.
Weak Subjects that need strong focus: ${weakSubjects.join(", ")}.
Target Grade: ${targetGrade || "Excellent A+"}.
Test/Exam Target Date: ${examDate || "Jestha 15"}.
Construct a dedicated daily block (including sunday through friday) detailing subjects, specific focusing modules, revision activities, and customized high-inspiration instructions.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            studySchedule: {
              type: Type.ARRAY,
              description: "Array of weekly study periods and suggestions",
              items: {
                type: Type.OBJECT,
                properties: {
                  day: { type: Type.STRING, description: "Day of the week (e.g., Sunday, Monday, etc.)" },
                  time: { type: Type.STRING, description: "Suggested study time block (e.g., 5:00 PM - 6:30 PM)" },
                  subject: { type: Type.STRING, description: "Focused subject" },
                  focusTopics: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Specific topics or chapters to focus on" },
                  activityType: { type: Type.STRING, description: "Concrete type of revision (e.g. Practice questions, active recall, diagram sketching)" },
                  motivationalTip: { type: Type.STRING, description: "Encouragement tailored for this weak subject for Aarav" }
                },
                required: ["day", "time", "subject", "focusTopics", "activityType", "motivationalTip"]
              }
            },
            weeklyFocusGoal: { type: Type.STRING, description: "Overarching conceptual weekly study goal" }
          },
          required: ["studySchedule", "weeklyFocusGoal"]
        }
      }
    });

    const output = response.text ? JSON.parse(response.text.trim()) : {};
    res.json(output);

  } catch (error: any) {
    console.error("Study Planner Error:", error);
    res.status(500).json({ error: error.message || "Failed to generate study timetable with Gemini AI" });
  }
});

// AI Feature 2: Automated Assignment Feedback
app.post("/api/ai/assignment-feedback", async (req, res) => {
  try {
    const { studentName, assignmentTitle, submissionText, subject } = req.body;
    if (!submissionText || submissionText.trim().length === 0) {
      return res.status(400).json({ error: "Cannot rate empty submission content." });
    }

    const ai = getGeminiClient();

    const promptText = `Act as an expert high school academic evaluator at Lhotse English School.
Evaluate this student essay/assignment submission for the subject '${subject || "Compulsory Science"}' under assignment scope: '${assignmentTitle || "General Essay"}'.
Student submission text:
"${submissionText}"

Provide clean rubric-based marking of four axes (Understanding, Structure, Grammar, and Creativity - each out of 25), identify key strengths and specific areas of grammatical or presentation improvement. Write a generous, inspiring feedback summary with a gentle yet rigorous teacher tone, directly addressing ${studentName || "Aarav"}.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            overallScore: { type: Type.INTEGER, description: "Score out of 100" },
            letterGrade: { type: Type.STRING, description: "Letter grade matching Nepal secondary system A+, A, B+, B, C" },
            rubricPoints: {
              type: Type.OBJECT,
              properties: {
                understanding: { type: Type.INTEGER, description: "Score out of 25 for understanding" },
                structure: { type: Type.INTEGER, description: "Score out of 25 for flow and structure" },
                grammar: { type: Type.INTEGER, description: "Score out of 25 for grammar and punctuation" },
                creativity: { type: Type.INTEGER, description: "Score out of 25 for unique examples and articulation" }
              },
              required: ["understanding", "structure", "grammar", "creativity"]
            },
            strengths: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Specific points done exceptionally well" },
            improvements: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Concrete spelling or content improvements" },
            detailedCritique: { type: Type.STRING, description: "Personalized paragraph by the teacher explaining feedback in nurturing tone" }
          },
          required: ["overallScore", "letterGrade", "rubricPoints", "strengths", "improvements", "detailedCritique"]
        }
      }
    });

    const output = response.text ? JSON.parse(response.text.trim()) : {};
    res.json(output);

  } catch (error: any) {
    console.error("Assignment Feedback Error:", error);
    res.status(500).json({ error: error.message || "Failed to generate AI-grading feedback with Gemini AI" });
  }
});

// AI Feature 3: Automated Notice Writer
app.post("/api/ai/notice-writer", async (req, res) => {
  try {
    const { promptPoints, targetAudience, tone } = req.body;
    if (!promptPoints || promptPoints.trim().length === 0) {
      return res.status(400).json({ error: "Please enter brief bulletin notes to expand." });
    }

    const ai = getGeminiClient();

    const promptText = `Act as the Chief Administrator for Lhotse English School (Estd. 2049, Mechinagar-9, Dhulabari Jhapa).
Write a professional, beautiful formal announcement to make based on these brief bulletin points:
"${promptPoints}"

Target Recipient Audience: ${targetAudience || "All Parents, Guardians, and Teachers"}.
Desired Tone: ${tone || "Respectful, urgent, welcoming"}.
The response must follow high formal school letter guidelines, containing a catchy headline, welcoming salutations, a main body, and clear, bulleted takeaways of dates/events.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING, description: "Catchy but very respectful notices header" },
            targetAudience: { type: Type.STRING, description: "Audience of notice" },
            pennedBy: { type: Type.STRING, description: "Official signatory (e.g. Office of the Principal, Lhotse English School)" },
            body: { type: Type.STRING, description: "The full professional announcement body text. Make it flow beautifully." },
            keyTakeaways: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Short key takeaways details extracted from bullet points (e.g. key dates, location details)" },
            priorityLevel: { type: Type.STRING, description: "Urgent, Info, or Calendar" }
          },
          required: ["headline", "targetAudience", "pennedBy", "body", "keyTakeaways", "priorityLevel"]
        }
      }
    });

    const output = response.text ? JSON.parse(response.text.trim()) : {};
    res.json(output);

  } catch (error: any) {
    console.error("Notice Writer Error:", error);
    res.status(500).json({ error: error.message || "Failed to generate AI notice writing prompt via Gemini" });
  }
});

// Vite server integration & asset distribution setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    // Production serving static files
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Lhotse School Portal Server listening on port ${PORT}`);
  });
}

startServer();
