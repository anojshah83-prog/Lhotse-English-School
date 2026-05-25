import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  ClipboardList,
  CheckSquare,
  FileText,
  Plus,
  Send,
  Bell,
  Sparkles,
  DollarSign,
  CreditCard,
  CheckCircle2,
  MessageSquare,
  Inbox,
  AlertCircle,
  X,
  Clock,
  User,
  Users,
  Settings,
  HelpCircle,
  TrendingUp,
  Award
} from "lucide-react";

// Official SVG vector shield replica for Lhotse English School
function SchoolLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Soft yellow-to-gold gradient for the inner shield background */}
        <linearGradient id="shield-yellow-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFEE3" />
          <stop offset="50%" stopColor="#FFFFA6" />
          <stop offset="100%" stopColor="#FFEE00" />
        </linearGradient>

        {/* Precise curved path for the top ribbon text (LHOTSE ENGLISH SCHOOL) */}
        <path id="top-ribbon-text-path-real" d="M 118,78 Q 250,38 382,78" />
        {/* Precise curved path for the bottom ribbon text (MECHINAGAR-9, DHULABARI (JHAPA)) */}
        <path id="bottom-ribbon-text-path-real" d="M 118,341.5 Q 250,371.5 382,341.5" />
      </defs>

      {/* ==================== 1. UPPER RIBBON BANNER BACK WINGS & SHADOWS ==================== */}
      {/* Left Back swallowtail wing */}
      <path d="M 120,62 L 65,42 L 35,74 L 62,94 L 105,82 Z" fill="#FEED00" stroke="#1C3B95" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Left fold shadow */}
      <polygon points="120,62 128,96 105,82" fill="#D3A500" stroke="#1C3B95" strokeWidth="2.5" strokeLinejoin="round" />

      {/* Right Back swallowtail wing */}
      <path d="M 380,62 L 435,42 L 465,74 L 438,94 L 395,82 Z" fill="#FEED00" stroke="#1C3B95" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Right fold shadow */}
      <polygon points="380,62 372,96 395,82" fill="#D3A500" stroke="#1C3B95" strokeWidth="2.5" strokeLinejoin="round" />


      {/* ==================== 2. PRIMARY SHIELD LAYERS ==================== */}
      {/* Outer Green Shield (Representing nature & Jhapa district agriculture) */}
      <path d="M 100,100 Q 175,122 250,90 Q 325,122 400,100 C 405,210 370,360 250,410 C 130,360 95,210 100,100 Z" fill="#A0D22F" stroke="#1C3B95" strokeWidth="2.5" strokeLinejoin="round" />

      {/* Inner Yellow Shield */}
      <path d="M 115,115 Q 182,135 250,105 Q 318,135 385,115 C 390,210 360,340 250,385 C 140,340 110,210 115,115 Z" fill="url(#shield-yellow-gradient)" stroke="#1C3B95" strokeWidth="2.5" strokeLinejoin="round" />


      {/* ==================== 3. SHIELD INTERIOR CONTENT ==================== */}
      {/* Mountain range grid background */}
      <path d="M 136,210 L 140,202 L 148,206 L 155,190 L 165,195 L 175,180 L 182,188 L 195,178 L 202,184 L 212,170 L 222,185 L 235,172 L 248,155 L 258,174 L 268,162 L 282,182 L 295,168 L 308,185 L 320,170 L 332,184 L 342,173 L 350,188 L 358,182 L 364,210 Z" fill="#FFFFFF" opacity="0.9" />
      
      {/* Mountain Outline */}
      <path d="M 136,210 L 140,202 L 148,206 L 155,190 L 165,195 L 175,180 L 182,188 L 195,178 L 202,184 L 212,170 L 222,185 L 235,172 L 248,155 L 258,174 L 268,162 L 282,182 L 295,168 L 308,185 L 320,170 L 332,184 L 342,173 L 350,188 L 358,182 L 364,210" stroke="#126E30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      
      {/* Mountain Hatching Shading lines */}
      <g stroke="#126E30" strokeWidth="1">
        <line x1="140" y1="202" x2="140" y2="210" />
        <line x1="144" y1="204" x2="144" y2="210" />
        <line x1="152" y1="195" x2="152" y2="210" />
        <line x1="155" y1="190" x2="155" y2="210" />
        <line x1="160" y1="192" x2="160" y2="210" />
        <line x1="165" y1="195" x2="165" y2="210" />
        <line x1="170" y1="188" x2="170" y2="210" />
        <line x1="175" y1="180" x2="175" y2="210" />
        <line x1="180" y1="186" x2="180" y2="210" />
        <line x1="185" y1="183" x2="185" y2="210" />
        <line x1="190" y1="180" x2="190" y2="210" />
        <line x1="195" y1="178" x2="195" y2="210" />
        <line x1="200" y1="182" x2="200" y2="210" />
        <line x1="206" y1="178" x2="206" y2="210" />
        <line x1="212" y1="170" x2="212" y2="210" />
        <line x1="217" y1="177" x2="217" y2="210" />
        <line x1="222" y1="185" x2="222" y2="210" />
        <line x1="228" y1="180" x2="228" y2="210" />
        <line x1="235" y1="172" x2="235" y2="210" />
        <line x1="242" y1="163" x2="242" y2="210" />
        <line x1="248" y1="155" x2="248" y2="210" />
        <line x1="253" y1="165" x2="253" y2="210" />
        <line x1="258" y1="174" x2="258" y2="210" />
        <line x1="263" y1="168" x2="263" y2="210" />
        <line x1="268" y1="162" x2="268" y2="210" />
        <line x1="275" y1="172" x2="275" y2="210" />
        <line x1="282" y1="182" x2="282" y2="210" />
        <line x1="288" y1="175" x2="288" y2="210" />
        <line x1="295" y1="168" x2="295" y2="210" />
        <line x1="301" y1="176" x2="301" y2="210" />
        <line x1="308" y1="185" x2="308" y2="210" />
        <line x1="314" y1="177" x2="314" y2="210" />
        <line x1="320" y1="170" x2="320" y2="210" />
        <line x1="326" y1="177" x2="326" y2="210" />
        <line x1="332" y1="184" x2="332" y2="210" />
        <line x1="337" y1="179" x2="337" y2="210" />
        <line x1="342" y1="173" x2="342" y2="210" />
        <line x1="346" y1="180" x2="346" y2="210" />
        <line x1="350" y1="188" x2="350" y2="210" />
        <line x1="354" y1="185" x2="354" y2="210" />
        <line x1="358" y1="182" x2="358" y2="210" />
      </g>
      
      {/* Base line for mountains */}
      <line x1="130" y1="210" x2="370" y2="210" stroke="#126E30" strokeWidth="2" />

      {/* Traditional Earthen Diyo (Oil Lamp base and components) */}
      {/* Diyo Base shadow */}
      <ellipse cx="250" cy="288" rx="36" ry="8" fill="#9C2025" opacity="0.4" />
      
      {/* Main Red Terracotta Bowl */}
      <path d="M 215,280 C 215,310 285,310 285,280 Z" fill="#DC2626" stroke="#1C3B95" strokeWidth="2.5" />
      
      {/* Bowl Rim lip upper oval */}
      <ellipse cx="250" cy="280" rx="35" ry="9" fill="#E65100" stroke="#1C3B95" strokeWidth="2" />
      
      {/* White traditional swirl decor / patterns */}
      <path d="M 226,290 Q 250,302 274,290" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3,3" />
      <path d="M 232,295 Q 250,306 268,295" fill="none" stroke="#FFFFFF" strokeWidth="2" />

      {/* Traditional Warm Flame (Positioned on the right side of the diyo rim representing the wick) */}
      {/* Glow filter backdrop */}
      <circle cx="270" cy="245" r="24" fill="#FEED00" opacity="0.3" filter="blur(6px)" />
      
      {/* Red Outer Flame leaf */}
      <path d="M 268,278 C 253,264 260,230 282,216 C 294,230 290,265 268,278 Z" fill="#DC2626" stroke="#1C3B95" strokeWidth="0.8" />
      
      {/* Inner Yellow Core */}
      <path d="M 269,274 C 259,261 264,238 280,224 C 288,238 284,262 269,274 Z" fill="#FFEE00" />

      {/* Red Light Rays Radiating from Flame */}
      <g stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round">
        <line x1="244" y1="246" x2="234" y2="243" />
        <line x1="246" y1="237" x2="238" y2="230" />
        <line x1="251" y1="229" x2="244" y2="220" />
        <line x1="258" y1="222" x2="253" y2="212" />
        <line x1="267" y1="218" x2="265" y2="207" />
        <line x1="279" y1="218" x2="281" y2="207" />
        <line x1="289" y1="222" x2="294" y2="212" />
        <line x1="296" y1="229" x2="303" y2="220" />
        <line x1="300" y1="237" x2="308" y2="230" />
        <line x1="302" y1="246" x2="312" y2="243" />
        <line x1="301" y1="256" x2="311" y2="255" />
        <line x1="298" y1="266" x2="308" y2="267" />
        <line x1="292" y1="275" x2="301" y2="279" />
        <line x1="243" y1="256" x2="233" y2="255" />
        <line x1="245" y1="266" x2="235" y2="267" />
        <line x1="249" y1="275" x2="240" y2="279" />
      </g>

      {/* In-Shield texts exactly as physical logo */}
      <text x="250" y="328" fill="#112368" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="'Georgia', 'Times New Roman', serif" letterSpacing="0.2">DISCIPLINE FAITH & LOVE</text>
      <text x="250" y="348" fill="#112368" fontSize="13.5" fontWeight="900" textAnchor="middle" fontFamily="'Georgia', 'Times New Roman', serif">Estd. : 2049</text>


      {/* ==================== 4. UPPER BANNER FOREGROUND FACE & TEXT ==================== */}
      {/* Front Face ribbon body */}
      <path d="M 120,62 Q 250,22 380,62 L 372,96 Q 250,56 128,96 Z" fill="#FEED00" stroke="#1C3B95" strokeWidth="2.5" strokeLinejoin="round" />
      
      {/* School Name curved text */}
      <text fontStyle="normal">
        <textPath href="#top-ribbon-text-path-real" startOffset="50%" textAnchor="middle" fill="#1C3B95" fontSize="15" fontWeight="900" fontFamily="'Impact', 'Arial Black', 'Plus Jakarta Sans', sans-serif" letterSpacing="0.4">
          LHOTSE ENGLISH SCHOOL
        </textPath>
      </text>


      {/* ==================== 5. BOTTOM BANNER FOREGROUND FACE & TEXT ==================== */}
      {/* Left Back swallowtail bottom wing */}
      <path d="M 120,325 L 65,345 L 35,313 L 62,293 L 105,305 Z" fill="#FEED00" stroke="#1C3B95" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Left Bottom shadow fold */}
      <polygon points="120,325 128,358 105,305" fill="#D3A500" stroke="#1C3B95" strokeWidth="2.5" strokeLinejoin="round" />

      {/* Right Back swallowtail bottom wing */}
      <path d="M 380,325 L 435,345 L 465,313 L 438,293 L 395,305 Z" fill="#FEED00" stroke="#1C3B95" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Right Bottom shadow fold */}
      <polygon points="380,325 372,358 395,305" fill="#D3A500" stroke="#1C3B95" strokeWidth="2.5" strokeLinejoin="round" />

      {/* Front bottom ribbon body */}
      <path d="M 120,325 Q 250,355 380,325 L 372,358 Q 250,388 128,358 Z" fill="#FEED00" stroke="#1C3B95" strokeWidth="2.5" strokeLinejoin="round" />

      {/* Bottom curved address text */}
      <text fontStyle="normal">
        <textPath href="#bottom-ribbon-text-path-real" startOffset="50%" textAnchor="middle" fill="#1C3B95" fontSize="11" fontWeight="900" fontFamily="'Impact', 'Arial Black', 'Plus Jakarta Sans', sans-serif" letterSpacing="0.2">
          MECHINAGAR-9, DHULABARI (JHAPA)
        </textPath>
      </text>

    </svg>
  );
}

// In-memory static types mirroring our endpoints
interface Student {
  id: string;
  name: string;
  rollNo: number;
  grade: string;
  parentId: string;
  email: string;
  avatar: string;
  attendance: number;
}

interface Teacher {
  id: string;
  name: string;
  subject: string;
  classTeacherOf: string | null;
  email: string;
  avatar: string;
}

interface Parent {
  id: string;
  name: string;
  childIds: string[];
  email: string;
  relation: string;
  contact: string;
}

interface Period {
  time: string;
  subject: string;
  teacher: string;
  room: string;
}

interface RoutineDay {
  day: string;
  periods: Period[];
}

interface Assignment {
  id: string;
  subject: string;
  title: string;
  description: string;
  dueDate: string;
  totalPoints: number;
  grade: string;
  author: string;
}

interface Notice {
  id: string;
  title: string;
  sender: string;
  date: string;
  content: string;
  keyPoints: string[];
  priority: string;
}

interface AttendanceLog {
  date: string;
  studentId: string;
  status: "Present" | "Absent" | "Late";
}

interface GradeRecord {
  id: string;
  studentId: string;
  subject: string;
  firstTerm: number;
  midTerm: number;
  finalTerm: number;
  remarks: string;
}

interface ChatMessage {
  id: string;
  parentId: string;
  teacherId: string;
  sender: "parent" | "teacher";
  timestamp: string;
  message: string;
}

interface BillingBill {
  id: string;
  parentId: string;
  title: string;
  amount: number;
  dueDate: string;
  paidDate: string | null;
  status: "Paid" | "Unpaid";
  items: string[];
}

interface DatabaseState {
  students: Student[];
  teachers: Teacher[];
  parents: Parent[];
  routines: RoutineDay[];
  assignments: Assignment[];
  notices: Notice[];
  attendanceLogs: AttendanceLog[];
  grades: GradeRecord[];
  messages: ChatMessage[];
  billing: BillingBill[];
}

export default function App() {
  // Portal user context switcher
  const [activeRole, setActiveRole] = useState<"student" | "teacher" | "parent" | "admin">("student");
  const [dbState, setDbState] = useState<DatabaseState | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sub-navigation selections state
  const [selectedStudentId, setSelectedStudentId] = useState<string>("stud_1"); // Default: Aarav Sharma
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0); // Default Today: Sunday (school week index 0)

  // Submissions forms states
  const [attendanceDate, setAttendanceDate] = useState<string>(new Date().toISOString().split("T")[0]);
  const [attendanceMap, setAttendanceMap] = useState<{ [studentId: string]: "Present" | "Absent" | "Late" }>({
    stud_1: "Present",
    stud_2: "Present",
    stud_3: "Absent",
  });
  const [postHomework, setPostHomework] = useState({
    subject: "Compulsory Mathematics",
    title: "",
    description: "",
    dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    totalPoints: 10,
    author: "Mrs. Sunita Adhikari",
  });
  const [enterScore, setEnterScore] = useState({
    studentId: "stud_1",
    subject: "Compulsory Mathematics",
    scoreType: "midTerm",
    value: 85,
    remarks: "",
  });
  const [parentsChatText, setParentsChatText] = useState("");
  const [newNoticeForm, setNewNoticeForm] = useState({
    title: "",
    content: "",
    sender: "Principal's Office",
    keyPointsText: "",
    priority: "Info",
  });
  const [newInvoiceForm, setNewInvoiceForm] = useState({
    parentId: "parent_1",
    title: "Grade 10 Extra Classroom Coaching Fees",
    amount: 3500,
    dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    itemsText: "Coaching Lesson Fee: Rs. 2500\nExam Material Cost: Rs. 1000",
  });

  // AI Feature State handlers
  const [plannerWeakSubjects, setPlannerWeakSubjects] = useState<string[]>(["Compulsory Mathematics"]);
  const [plannerExamDate, setPlannerExamDate] = useState<string>("2026-06-15");
  const [plannerGradeGoal, setPlannerGradeGoal] = useState<string>("Excellent A+");
  const [plannerAIResult, setPlannerAIResult] = useState<any>(null);
  const [plannerAILoading, setPlannerAILoading] = useState(false);

  const [essayText, setEssayText] = useState(
    "Newton's Second Law states that force equals mass times acceleration (F=ma). This means that a heavier object requires more force to accelerate at same index than a lighter one. For example, pushing an empty shopping cart is easy, but pushing a loaded heavy cart requires tremendous strength because the mass increases. In space rocketry, this law dictates how much propulsion fuel is burning to move massive spacecraft payloads. Sometimes calculations get tough due to gravity formulas."
  );
  const [essaySubject, setEssaySubject] = useState("Compulsory Science");
  const [essayTitle, setEssayTitle] = useState("Newton's Second Law Essay");
  const [essayAIResult, setEssayAIResult] = useState<any>(null);
  const [essayAILoading, setEssayAILoading] = useState(false);

  const [bulletinNotes, setBulletinNotes] = useState(
    "- School runs short classes on Jestha 15 due to heatwave.\n- Timing will be 7:00 AM - 10:30 AM.\n- School bus will pick up 2.5 hours early from respective stops.\n- Parents advised to send clean drinking water bottles with hydration salts."
  );
  const [bulletinAudience, setBulletinAudience] = useState("All Parents, Guardians, and Teachers");
  const [bulletinTone, setBulletinTone] = useState("Urgent, polite, and encouraging");
  const [bulletinAIResult, setBulletinAIResult] = useState<any>(null);
  const [bulletinAILoading, setBulletinAILoading] = useState(false);

  const [activeTab, setActiveTab] = useState<{ [role: string]: string }>({
    student: "routine",
    teacher: "attendance",
    parent: "performance",
    admin: "invoice",
  });

  // Load backend database on mount
  const syncDatabase = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/data");
      if (!res.ok) throw new Error("Failed to load school portal data.");
      const data: DatabaseState = await res.json();
      setDbState(data);
      setErrorMessage(null);
    } catch (err: any) {
      console.error(err);
      setErrorMessage("Could not load data. Ensure server is active and configured correctly.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    syncDatabase();
    // Set default selected day based on real time if sunday-friday (0-5)
    const day = new Date().getDay(); // 0 is Sunday, 1 Monday, 5 Friday, 6 Saturday
    if (day >= 0 && day <= 5) {
      setSelectedDayIndex(day);
    } else {
      setSelectedDayIndex(0); // If saturday, highlight Sunday routing
    }
  }, []);

  // API Submission wrappers
  const handleMarkAttendanceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const attendanceArray = Object.keys(attendanceMap).map(id => ({
        studentId: id,
        status: attendanceMap[id],
      }));
      const res = await fetch("/api/attendance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date: attendanceDate, attendanceArray }),
      });
      if (!res.ok) throw new Error("Attendance submission failed");
      await syncDatabase();
      alert("Successfully logged class attendance on: " + attendanceDate);
    } catch (err: any) {
      alert("Error: " + err.message);
    }
  };

  const handlePostHomeworkSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!postHomework.title || !postHomework.description) {
      alert("Please enter title and description metrics");
      return;
    }
    try {
      const res = await fetch("/api/assignment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postHomework),
      });
      if (!res.ok) throw new Error("Failed to generate assignment");
      await syncDatabase();
      setPostHomework(prev => ({ ...prev, title: "", description: "" }));
      alert("Successfully assigned homework task: " + postHomework.title);
    } catch (err: any) {
      alert("Error: " + err.message);
    }
  };

  const handleSubmitGrades = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/grades", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: enterScore.studentId,
          subject: enterScore.subject,
          scoreType: enterScore.scoreType,
          value: Number(enterScore.value),
          remarks: enterScore.remarks,
        }),
      });
      if (!res.ok) throw new Error("Grade transmission error");
      await syncDatabase();
      alert("Updated grades record successfully!");
    } catch (err: any) {
      alert("Error: " + err.message);
    }
  };

  const handleSendChatMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentsChatText.trim()) return;
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parentId: "parent_1",
          teacherId: "teach_1",
          sender: activeRole === "teacher" ? "teacher" : "parent",
          message: parentsChatText,
        }),
      });
      if (!res.ok) throw new Error("Failed to send chat line");
      setParentsChatText("");
      await syncDatabase();

      // Trigger automatic polite notification simulating standard response flow
      if (activeRole === "parent") {
        setTimeout(() => {
          alert("Lhotse App Info: Mrs. Sunita Adhikari has been notified via immediate push warning.");
        }, 800);
      }
    } catch (err: any) {
      alert("Chat Error: " + err.message);
    }
  };

  const handlePayFeeStatement = async (billId: string) => {
    try {
      // Simulate real-time payment updating status locally & server if enabled
      alert("Lhotse Nepal Payment Gateway: Redirecting to secure wallet... Paid successfully and cleared bill!");
      // Directly modify parent billing invoice in database cache & trigger local success
      if (dbState) {
        const updatedBills = dbState.billing.map(b => (b.id === billId ? { ...b, status: "Paid" as const, paidDate: new Date().toISOString().split("T")[0] } : b));
        setDbState({ ...dbState, billing: updatedBills });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGenerateInvoiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const items = newInvoiceForm.itemsText.split("\n").filter(line => line.trim().length > 0);
      const res = await fetch("/api/billing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parentId: newInvoiceForm.parentId,
          title: newInvoiceForm.title,
          amount: newInvoiceForm.amount,
          dueDate: newInvoiceForm.dueDate,
          items,
        }),
      });
      if (!res.ok) throw new Error("Invoice creation failed");
      await syncDatabase();
      setNewInvoiceForm(prev => ({ ...prev, title: "", itemsText: "" }));
      alert("Student invoice billing ledger created and published for parental profile!");
    } catch (err: any) {
      alert("Error: " + err.message);
    }
  };

  const handleCreateNoticeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoticeForm.title || !newNoticeForm.content) {
      alert("Fill heading content");
      return;
    }
    try {
      const keyPoints = newNoticeForm.keyPointsText.split("\n").filter(p => p.trim().length > 0);
      const res = await fetch("/api/notices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newNoticeForm.title,
          content: newNoticeForm.content,
          sender: newNoticeForm.sender,
          keyPoints,
          priority: newNoticeForm.priority,
        }),
      });
      if (!res.ok) throw new Error("Notice generation error");
      await syncDatabase();
      setNewNoticeForm(prev => ({ ...prev, title: "", content: "", keyPointsText: "" }));
      alert("Circular announcement notice published live across parent/student dashboards!");
    } catch (err: any) {
      alert("Error: " + err.message);
    }
  };

  // AI Actions leveraging actual Gemini REST endpoints
  const executeStudyPlannerAI = async () => {
    if (plannerWeakSubjects.length === 0) {
      alert("Please select at least one focal subject.");
      return;
    }
    try {
      setPlannerAILoading(true);
      setPlannerAIResult(null);
      const currentStudent = dbState?.students.find(s => s.id === selectedStudentId);
      const res = await fetch("/api/ai/study-planner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: currentStudent?.name || "Aarav Sharma",
          weakSubjects: plannerWeakSubjects,
          examDate: plannerExamDate,
          targetGrade: plannerGradeGoal,
        }),
      });
      if (!res.ok) throw new Error("API failed to load planner");
      const data = await res.json();
      setPlannerAIResult(data);
    } catch (err: any) {
      alert("Gemini AI failed: " + err.message);
    } finally {
      setPlannerAILoading(false);
    }
  };

  const executeEssayGradingAI = async () => {
    if (!essayText.trim()) {
      alert("Enter submission essay text body");
      return;
    }
    try {
      setEssayAILoading(true);
      setEssayAIResult(null);
      const currentStudent = dbState?.students.find(s => s.id === enterScore.studentId);
      const res = await fetch("/api/ai/assignment-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: currentStudent?.name || "Aarav Sharma",
          assignmentTitle: essayTitle,
          submissionText: essayText,
          subject: essaySubject,
        }),
      });
      if (!res.ok) throw new Error("AI review system temporarily offline");
      const data = await res.json();
      setEssayAIResult(data);
    } catch (err: any) {
      alert("Gemini evaluation error: " + err.message);
    } finally {
      setEssayAILoading(false);
    }
  };

  const executeNoticeDraftAI = async () => {
    if (!bulletinNotes.trim()) {
      alert("Please supply bulletin details");
      return;
    }
    try {
      setBulletinAILoading(true);
      setBulletinAIResult(null);
      const res = await fetch("/api/ai/notice-writer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          promptPoints: bulletinNotes,
          targetAudience: bulletinAudience,
          tone: bulletinTone,
        }),
      });
      if (!res.ok) throw new Error("Gemini notice draftsman error");
      const data = await res.json();
      setBulletinAIResult(data);
    } catch (err: any) {
      alert("Gemini draft fail: " + err.message);
    } finally {
      setBulletinAILoading(false);
    }
  };

  const publishAIDraftedNotice = async () => {
    if (!bulletinAIResult) return;
    try {
      const res = await fetch("/api/notices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: bulletinAIResult.headline,
          content: bulletinAIResult.body,
          sender: bulletinAIResult.pennedBy || "Office of the Principal",
          keyPoints: bulletinAIResult.keyTakeaways,
          priority: bulletinAIResult.priorityLevel || "Urgent",
        }),
      });
      if (!res.ok) throw new Error("Notice generation error");
      await syncDatabase();
      alert("AI Notice successfully polished, registered, and published globally!");
      setBulletinAIResult(null);
    } catch (err: any) {
      alert("Error publishing: " + err.message);
    }
  };

  // Helper selectors
  const studentProfile = dbState?.students.find(s => s.id === selectedStudentId) || {
    id: "stud_1",
    name: "Aarav Sharma",
    rollNo: 12,
    grade: "10 A",
    parentId: "parent_1",
    email: "aarav@lhotse.edu.np",
    avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&h=200&fit=crop",
    attendance: 92,
  };

  const studentGrades = dbState?.grades.filter(g => g.studentId === selectedStudentId) || [];
  const activeRoutine = dbState?.routines[selectedDayIndex] || { day: "Sunday", periods: [] };
  const parentProfile = dbState?.parents.find(p => p.childIds.includes(selectedStudentId)) || {
    id: "parent_1",
    name: "Mr. Rajesh Sharma", 
    email: "rajesh.sharma@gmail.com",
    contact: "+977-98526XXXXX",
    relation: "Father",
  };
  const parentInvoices = dbState?.billing.filter(b => b.parentId === parentProfile.id) || [];
  const currentChatLogs = dbState?.messages || [];

  // GPA calculation helper based on term standards (out of 100 max)
  const calculateAggregateGPA = (records: GradeRecord[]) => {
    if (records.length === 0) return "N/F";
    let scoreSum = 0;
    records.forEach(r => {
      const average = (r.firstTerm + r.midTerm + r.finalTerm) / 3;
      scoreSum += average;
    });
    const classAvgPercent = scoreSum / records.length;
    // GPA Scale Nepal
    if (classAvgPercent >= 90) return "4.0 (A+)";
    if (classAvgPercent >= 80) return "3.6 (A)";
    if (classAvgPercent >= 70) return "3.2 (B+)";
    if (classAvgPercent >= 60) return "2.8 (B)";
    if (classAvgPercent >= 50) return "2.4 (C+)";
    return "2.0 (C)";
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans antialiased flex flex-col xl:flex-row shadow-inner">
      
      {/* Sidebar navigation styled with the Natural Tones aesthetic */}
      <aside className="w-full xl:w-80 flex flex-col bg-white/60 backdrop-blur-md border-b xl:border-b-0 xl:border-r border-[#E2E8F0] p-6 shrink-0 transition-all">
        
        {/* Brand identity area focusing on Lhotse English School */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-16 h-16 shrink-0 transition-transform hover:scale-105 duration-200">
            <SchoolLogo className="w-full h-full" />
          </div>
          <div>
            <h1 className="font-display font-bold text-sm tracking-tight text-[#1E3A8A] leading-none uppercase">Lhotse English</h1>
            <p className="text-[10px] text-[#2563EB] uppercase tracking-[0.15em] font-semibold mt-1">Secondary Board Portal</p>
            <p className="text-[9px] text-[#64748B] italic mt-0.5">Mechinagar-9, Jhapa • Estd. 2049</p>
          </div>
        </div>

        {/* Global Access Switcher (Dynamic multi-role portal views) */}
        <div className="mb-6 p-4 bg-[#F1F5F9] rounded-2xl border border-[#E2E8F0]">
          <p className="text-[9px] font-bold text-[#2563EB] uppercase tracking-wider mb-2">Configure Portal Perspective</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: "student", label: "Student Panel" },
              { id: "teacher", label: "Teacher Panel" },
              { id: "parent", label: "Parent Portal" },
              { id: "admin", label: "Admin Board" }
            ].map(role => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id as any)}
                className={`py-1.5 px-2 rounded-xl text-[10px] font-bold transition-all uppercase tracking-wide cursor-pointer text-center ${
                  activeRole === role.id
                    ? "bg-[#1E3A8A] text-white shadow-sm"
                    : "bg-white/75 text-[#1E293B] border border-[#E2E8F0] hover:bg-[#F8FAFC]"
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Context Panel depending on selected user roles */}
        <div className="mb-6">
          <p className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest mb-2 px-1">Selected Student Profile</p>
          <select
            value={selectedStudentId}
            onChange={(e) => setSelectedStudentId(e.target.value)}
            className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#1E3A8A]"
          >
            {dbState?.students.map(stud => (
              <option key={stud.id} value={stud.id}>
                {stud.name} (Roll: {stud.rollNo} • {stud.grade})
              </option>
            ))}
          </select>
        </div>

        {/* Sub-tabs specific to current view perspective */}
        <nav className="flex flex-col gap-1.5">
          {activeRole === "student" && [
            { id: "routine", label: "Class Routine Grid", icon: Calendar },
            { id: "grades", label: "Academic Report Card", icon: Award },
            { id: "planner", label: "AI Study Timetable", icon: Sparkles },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(prev => ({ ...prev, student: tab.id }))}
              className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab.student === tab.id
                  ? "bg-[#1E3A8A]/10 text-[#1E3A8A] border-l-4 border-[#1E3A8A]"
                  : "text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#1E293B]"
              }`}
            >
              <tab.icon className="w-4 h-4 shrink-0" />
              <span>{tab.label}</span>
            </button>
          ))}

          {activeRole === "teacher" && [
            { id: "attendance", label: "Daily Attendance Ledger", icon: ClipboardList },
            { id: "homework", label: "Manage Homework", icon: BookOpen },
            { id: "gradebook", label: "Gradebook Scores Entry", icon: Award },
            { id: "feedback", label: "AI Essay Evaluator", icon: Sparkles },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(prev => ({ ...prev, teacher: tab.id }))}
              className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab.teacher === tab.id
                  ? "bg-[#1E3A8A]/10 text-[#1E3A8A] border-l-4 border-[#1E3A8A]"
                  : "text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#1E293B]"
              }`}
            >
              <tab.icon className="w-4 h-4 shrink-0" />
              <span>{tab.label}</span>
            </button>
          ))}

          {activeRole === "parent" && [
            { id: "performance", label: "Child Term Progress", icon: GraduationCap },
            { id: "fees", label: "Tuition Fees Ledger", icon: DollarSign },
            { id: "chat", label: "Parent-Teacher Chat", icon: MessageSquare },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(prev => ({ ...prev, parent: tab.id }))}
              className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab.parent === tab.id
                  ? "bg-[#1E3A8A]/10 text-[#1E3A8A] border-l-4 border-[#1E3A8A]"
                  : "text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#1E293B]"
              }`}
            >
              <tab.icon className="w-4 h-4 shrink-0" />
              <span>{tab.label}</span>
            </button>
          ))}

          {activeRole === "admin" && [
            { id: "invoice", label: "Billing Invoice Drawer", icon: CreditCard },
            { id: "notices", label: "Circular Bulletin Board", icon: Bell },
            { id: "writernotice", label: "AI Notice Draft Writer", icon: Sparkles },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(prev => ({ ...prev, admin: tab.id }))}
              className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab.admin === tab.id
                  ? "bg-[#1E3A8A]/10 text-[#1E3A8A] border-l-4 border-[#1E3A8A]"
                  : "text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#1E293B]"
              }`}
            >
              <tab.icon className="w-4 h-4 shrink-0" />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* Global info footer */}
        <div className="mt-auto pt-6 border-t border-[#E2E8F0]">
          <div className="bg-[#F1F5F9] p-4 rounded-2xl border border-[#E2E8F0]">
            <p className="text-[10px] font-bold text-[#2563EB] uppercase mb-1 tracking-wider">Lhotse Server Sync</p>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shrink-0"></span>
              <p className="text-[11px] font-serif italic text-[#1E3A8A]">Nepal Year: 2083 (Estd. 2049)</p>
            </div>
          </div>
        </div>

      </aside>

      {/* Main viewport area */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Banner with greeting and role presentation */}
        <header className="bg-[#1E3A8A] text-white p-8 relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-10 w-44 h-44 bg-[#2563EB]/20 rounded-full blur-3xl rounded-r-none pointer-events-none"></div>
          <div className="absolute -bottom-10 right-20 w-32 h-32 bg-white/5 rounded-full border border-white/10 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#DDE5B6] font-extrabold bg-[#3E3E29]/40 px-3 py-1 rounded-full">
                Perspective: {activeRole.toUpperCase()}
              </span>
              
              <h2 className="text-3xl font-serif italic mt-3 text-[#F8FAFC]">
                {activeRole === "student" && `Namaste, ${studentProfile.name}`}
                {activeRole === "teacher" && `Mrs. Sunita Adhikari`}
                {activeRole === "parent" && `Respected parent, ${parentProfile.name}`}
                {activeRole === "admin" && `Lhotse School Registrar`}
              </h2>
              
              <p className="text-sm mt-1 text-[#DDE5B6]/90 max-w-xl">
                {activeRole === "student" && `Welcome. Review your study calendar, grades card, and try our automated study timetable AI planner.`}
                {activeRole === "teacher" && `Subject Specialist Class 10-A. Manage daily attendance sheets, homework files, and evaluate student papers.`}
                {activeRole === "parent" && `Monitoring academic logs, attendance percentages, and billing dues for child Aarav Sharma.`}
                {activeRole === "admin" && `Generate tuition fees invoices, and publish circular announcements.`}
              </p>
            </div>

            {/* Quick stats badges */}
            <div className="flex gap-3 shrink-0 self-start md:self-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-2xl">
                <span className="block text-[9px] uppercase tracking-wider text-[#DDE5B6] font-bold">Class Section</span>
                <span className="text-lg font-serif italic text-white">Grade 10 A</span>
              </div>
              <div className="bg-[#B45F42] px-4 py-2 rounded-2xl relative">
                <span className="block text-[9px] uppercase tracking-wider text-white/80 font-bold">Lhotse Estd.</span>
                <span className="text-lg font-serif italic text-white">2049 B.S.</span>
              </div>
            </div>
          </div>
        </header>

        {/* Primary Dashboards switch */}
        <div className="flex-1 p-6 lg:p-8 space-y-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="border-4 border-[#1E3A8A] border-t-transparent rounded-full w-12 h-12 animate-spin mb-4"></div>
              <p className="font-serif italic text-[#1E3A8A]">Connecting with Lhotse database servers...</p>
            </div>
          ) : errorMessage ? (
            <div className="p-6 bg-red-50 border border-red-200 rounded-[2rem] text-center text-red-800">
              <AlertCircle className="w-12 h-12 mx-auto text-red-500 mb-2" />
              <p className="font-bold">{errorMessage}</p>
              <button onClick={syncDatabase} className="mt-4 px-6 py-2 bg-red-600 text-white font-bold rounded-2xl">Retry Server Signal</button>
            </div>
          ) : (
            <>
              {/* ==================== 1. STUDENT VIEW PORTAL ==================== */}
              {activeRole === "student" && (
                <div className="space-y-6">
                  {/* Student Header Widgets (Performance and Quick Highlights) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Attendance Ring Card */}
                    <div className="bg-white/70 backdrop-blur-md border border-[#E2E8F0] rounded-[2rem] p-6 flex items-center gap-5">
                      <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90">
                          <circle cx="40" cy="40" r="34" stroke="#F1F5F9" strokeWidth="6" fill="none" />
                          <circle
                            cx="40"
                            cy="40"
                            r="34"
                            stroke="#1E3A8A"
                            strokeWidth="6"
                            fill="none"
                            strokeDasharray="213.6"
                            strokeDashoffset={213.6 - (213.6 * studentProfile.attendance) / 100}
                            className="transition-all duration-500"
                          />
                        </svg>
                        <span className="absolute text-sm font-bold text-[#1E3A8A]">{studentProfile.attendance}%</span>
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest text-[#2563EB] font-bold">Month Attendance</h4>
                        <p className="text-xl font-serif italic text-[#1E3A8A] mt-1">{studentProfile.attendance >= 90 ? "Excellent Record" : "Regular efforts required"}</p>
                        <p className="text-xs text-[#64748B] mt-0.5">Approved target limit is &gt;85%</p>
                      </div>
                    </div>

                    {/* Overall GPA Score Card */}
                    <div className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-[2rem] p-6 flex flex-col justify-center">
                      <p className="text-[10px] uppercase font-bold text-[#2563EB] tracking-wider text-center">Class GPA SCORE</p>
                      <p className="text-4xl font-serif italic text-[#1E3A8A] text-center mt-1">{calculateAggregateGPA(studentGrades)}</p>
                      <div className="h-1 bg-white rounded-full mt-4 overflow-hidden">
                        <div className="h-full bg-[#B45F42] w-[88%] rounded-full"></div>
                      </div>
                    </div>

                    {/* Notice alert widget */}
                    <div className="bg-white/70 backdrop-blur-md border border-[#E2E8F0] rounded-[2rem] p-6 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="px-2.5 py-0.5 bg-red-100 text-red-800 text-[9px] font-bold rounded-lg uppercase">Global Notice</span>
                          <h4 className="text-xs font-bold mt-2 text-[#1E293B] line-clamp-1">{dbState?.notices[0]?.title}</h4>
                        </div>
                        <Bell className="w-5 h-5 text-[#B45F42]" />
                      </div>
                      <p className="text-[10px] text-[#64748B] mt-2 line-clamp-2">{dbState?.notices[0]?.content}</p>
                    </div>
                  </div>

                  {/* SUB TAB: ROUTINE SCHEDULER & PENDING ASSIGNMENTS */}
                  {activeTab.student === "routine" && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      
                      {/* Routine grid (Nepal School week Sunday through Friday) */}
                      <div className="lg:col-span-7 bg-white/70 backdrop-blur-md border border-[#E2E8F0] rounded-[2rem] p-6 lg:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                          <div>
                            <h3 className="text-lg font-serif italic text-[#1E3A8A]">Daily Class Routine</h3>
                            <p className="text-xs text-[#64748B]">Class starts at 10:00 AM Prompt</p>
                          </div>
                          
                          {/* Routine day picker buttons */}
                          <div className="flex flex-wrap gap-1 bg-[#F1F5F9] p-1 rounded-xl border border-[#E2E8F0]">
                            {dbState?.routines.map((dayObj, idx) => (
                              <button
                                key={dayObj.day}
                                onClick={() => setSelectedDayIndex(idx)}
                                className={`px-2 py-1 rounded-lg text-[10px] font-extrabold tracking-wide uppercase cursor-pointer ${
                                  selectedDayIndex === idx
                                    ? "bg-[#1E3A8A] text-white"
                                    : "text-[#64748B] hover:bg-[#E2E8F0]"
                                }`}
                              >
                                {dayObj.day.substring(0, 3)}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Routine periods list */}
                        <div className="space-y-3.5">
                          {activeRoutine.periods.map((period, pIdx) => (
                            <div key={pIdx} className="flex gap-4 p-4 bg-[#F8FAFC] rounded-[1.5rem] border border-[#E2E8F0] hover:scale-[1.01] transition-all">
                              <div className="text-[11px] font-bold text-[#1E3A8A] py-1 border-r border-[#E2E8F0] pr-4 w-32 shrink-0 flex flex-col justify-center">
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#2563EB]" /> Period {pIdx + 1}</span>
                                <span className="text-[10px] text-[#64748B] font-normal mt-0.5">{period.time}</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-bold text-[#1E293B]">{period.subject}</p>
                                <p className="text-[10px] text-[#2563EB] mt-0.5">Room: <span className="font-bold text-[#1E3A8A]">{period.room}</span> • Tutor: {period.teacher}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Side Pending Assignments */}
                      <div className="lg:col-span-5 bg-white/70 backdrop-blur-md border border-[#E2E8F0] rounded-[2rem] p-6 lg:p-8">
                        <h3 className="text-lg font-serif italic text-[#1E3A8A] mb-4">Pending Homework Homework Tasks</h3>
                        <div className="space-y-4">
                          {dbState?.assignments.map((assign) => (
                            <div key={assign.id} className="p-4 bg-white rounded-2xl border-l-4 border-[#B45F42] shadow-sm relative group hover:shadow-md transition-all">
                              <span className="absolute top-4 right-4 text-[9px] uppercase font-bold text-[#2563EB]">Max: {assign.totalPoints} Marks</span>
                              <h4 className="text-xs font-extrabold text-[#1E293B] pr-16">{assign.title}</h4>
                              <p className="text-[10px] text-[#64748B] mt-1 italic">Issued under: {assign.subject}</p>
                              <p className="text-[11px] text-[#1E293B]/80 mt-2 bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E2E8F0]">{assign.description}</p>
                              <div className="mt-3 flex items-center justify-between text-[10px]">
                                <span className="font-bold text-amber-800">Due: {assign.dueDate}</span>
                                <span className="text-[#64748B]">By {assign.author}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                  {/* SUB TAB: COMPREHENSIVE GRADES REPORT CARD */}
                  {activeTab.student === "grades" && (
                    <div className="bg-white/70 backdrop-blur-md border border-[#E2E8F0] rounded-[2rem] p-6 lg:p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#E2E8F0] pb-4 mb-6">
                        <div>
                          <h3 className="text-xl font-serif italic text-[#1E3A8A]">Grade 10 Performance Records</h3>
                          <p className="text-xs text-[#64748B]">Published Term Statistics under Nepal Curriculum Boards</p>
                        </div>
                        <div className="bg-[#1E3A8A] text-white py-2 px-4 rounded-xl text-xs font-bold shrink-0 self-start mt-2 md:mt-0">
                          Overall Assessment Status: Excellent Pass
                        </div>
                      </div>

                      {/* Grades tabular form */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="border-b border-[#E2E8F0] text-[#2563EB] uppercase tracking-wider">
                              <th className="py-3 px-2 font-bold">Subject Module</th>
                              <th className="py-3 px-2 text-center font-bold">First Term (30)</th>
                              <th className="py-3 px-2 text-center font-bold">Mid-Term (30)</th>
                              <th className="py-3 px-2 text-center font-bold">Final Exam (40)</th>
                              <th className="py-3 px-2 text-center font-bold">Total (100)</th>
                              <th className="py-3 px-2 font-bold">Qualitative Remarks</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#F1F5F9]">
                            {studentGrades.map((rec) => {
                              const grandTotal = rec.firstTerm + rec.midTerm + rec.finalTerm;
                              return (
                                <tr key={rec.id} className="hover:bg-[#F8FAFC]">
                                  <td className="py-3 px-2 font-bold text-[#1E293B]">{rec.subject}</td>
                                  <td className="py-3 px-2 text-center text-[#64748B]">{rec.firstTerm}</td>
                                  <td className="py-3 px-2 text-center text-[#64748B]">{rec.midTerm}</td>
                                  <td className="py-3 px-2 text-center text-[#64748B]">{rec.finalTerm}</td>
                                  <td className="py-3 px-2 text-center font-bold text-[#1E3A8A]">
                                    <span className={`px-2 py-1 rounded-lg ${grandTotal >= 80 ? "bg-emerald-50 text-emerald-800" : "bg-[#F1F5F9]"}`}>
                                      {grandTotal}
                                    </span>
                                  </td>
                                  <td className="py-3 px-2 italic text-[#64748B]">{rec.remarks}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* SUB TAB: AI STUDY PILL TIMER (GEMINI POWERED) */}
                  {activeTab.student === "planner" && (
                    <div className="bg-white/70 backdrop-blur-md border border-[#E2E8F0] rounded-[2rem] p-6 lg:p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        {/* Interactive configuration */}
                        <div className="lg:col-span-5 space-y-5">
                          <div className="bg-[#1E3A8A]/5 p-5 rounded-3xl border border-[#1E3A8A]/10">
                            <span className="px-2 py-0.5 bg-[#1E3A8A] text-white text-[9px] font-bold rounded uppercase">Lhotse Smart System</span>
                            <h3 className="text-base font-serif italic text-[#1E3A8A] mt-2">Gemini AI Study Planner</h3>
                            <p className="text-[11px] text-[#64748B] mt-1">Provide your weak disciplines, and Gemini 3.5 Flash will map a structured revision schedule tailored for your grade terminal targets!</p>
                          </div>

                          {/* Multi Select Subjects */}
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-2">Identify Weak Focal Subjects</label>
                            <div className="grid grid-cols-2 gap-2">
                              {["Compulsory Mathematics", "Compulsory Science", "English", "Nepali", "Social Studies"].map(sub => {
                                const selected = plannerWeakSubjects.includes(sub);
                                return (
                                  <button
                                    key={sub}
                                    type="button"
                                    onClick={() => {
                                      if (selected) {
                                        setPlannerWeakSubjects(prev => prev.filter(s => s !== sub));
                                      } else {
                                        setPlannerWeakSubjects(prev => [...prev, sub]);
                                      }
                                    }}
                                    className={`p-2 rounded-xl text-[11px] font-bold border transition-all text-left ${
                                      selected
                                        ? "bg-[#B45F42] text-white border-transparent"
                                        : "bg-white text-[#1E293B] border-[#E2E8F0] hover:bg-[#F1F5F9]"
                                    }`}
                                  >
                                    {sub}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Exam Target Date */}
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Target Exam Milestone Date</label>
                            <input
                              type="date"
                              value={plannerExamDate}
                              onChange={(e) => setPlannerExamDate(e.target.value)}
                              className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#1E3A8A]"
                            />
                          </div>

                          {/* Grade Target */}
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Desired Grading Target</label>
                            <select
                              value={plannerGradeGoal}
                              onChange={(e) => setPlannerGradeGoal(e.target.value)}
                              className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                            >
                              <option value="Excellent A+">Excellent A+ (GPA 3.6 - 4.0)</option>
                              <option value="Very Good A">Very Good A (GPA 3.2 - 3.6)</option>
                              <option value="Good B+">Good B+ (GPA 2.8 - 3.2)</option>
                            </select>
                          </div>

                          <button
                            onClick={executeStudyPlannerAI}
                            disabled={plannerAILoading}
                            className={`w-full py-3 rounded-2xl text-xs font-extrabold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer ${
                              plannerAILoading ? "bg-[#64748B] text-white cursor-not-allowed" : "bg-[#1E3A8A] text-white hover:bg-[#4E4E36] active:scale-[0.98]"
                            }`}
                          >
                            <Sparkles className="w-4 h-4 animate-bounce" />
                            {plannerAILoading ? "Building Study Map via Gemini..." : "Generate Timetable Grid"}
                          </button>
                        </div>

                        {/* AI Return Output Screen */}
                        <div className="lg:col-span-7 bg-[#F1F5F9] border border-[#E2E8F0] rounded-3xl p-6 relative min-h-[300px]">
                          {!plannerAIResult && !plannerAILoading && (
                            <div className="h-full flex flex-col items-center justify-center text-center opacity-70 absolute inset-0 p-6">
                              <Sparkles className="w-12 h-12 text-[#2563EB] mb-3" />
                              <p className="font-serif italic text-sm text-[#1E3A8A]">No study planner generated yet.</p>
                              <p className="text-[10px] text-[#64748B] mt-1">Configure your targets and click "Generate Timetable Grid" above to initiate Gemini analysis.</p>
                            </div>
                          )}

                          {plannerAILoading && (
                            <div className="h-full flex flex-col items-center justify-center text-center absolute inset-0 p-6">
                              <div className="border-4 border-[#B45F42] border-t-transparent rounded-full w-10 h-10 animate-spin mb-4"></div>
                              <p className="font-serif italic text-sm text-[#B45F42] animate-pulse">Running semantic generation with Gemini 3.5 Flash...</p>
                            </div>
                          )}

                          {plannerAIResult && (
                            <div className="space-y-4 animate-fade-in">
                              <h4 className="font-serif text-lg text-[#1E3A8A] border-b border-[#E2E8F0] pb-2 flex items-center justify-between">
                                <span>Study Roadmap Summary</span>
                                <span className="text-[10px] bg-[#B45F42] text-white px-2 py-0.5 rounded font-sans">Gemini Flash Generated</span>
                              </h4>
                              
                              <p className="text-xs bg-[#1E3A8A]/10 p-3 rounded-xl border border-[#2563EB] text-[#1E3A8A] font-bold">
                                🌟 Goal Focus: {plannerAIResult.weeklyFocusGoal}
                              </p>

                              <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
                                {plannerAIResult.studySchedule?.map((sched: any, idx: number) => (
                                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-[#E2E8F0] space-y-1">
                                    <div className="flex justify-between items-center text-[10px]">
                                      <span className="font-extrabold text-[#B45F42] uppercase tracking-wide">{sched.day} • {sched.time}</span>
                                      <span className="bg-[#F1F5F9] text-[#1E293B] px-2 py-0.5 rounded font-bold">{sched.subject}</span>
                                    </div>
                                    <p className="text-xs font-bold text-[#1E293B]">{sched.activityType}</p>
                                    <div className="text-[11px] text-[#64748B] pl-2 border-l-2 border-[#2563EB]">
                                      Modules: {sched.focusTopics?.join(", ")}
                                    </div>
                                    <p className="text-[10.5px] italic text-[#1E3A8A] pt-1">💡 Tips: {sched.motivationalTip}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ==================== 2. TEACHER VIEW PORTAL ==================== */}
              {activeRole === "teacher" && (
                <div className="space-y-6">
                  {/* Quick stats banner */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-[#E2E8F0] text-center">
                      <Users className="w-5 h-5 mx-auto text-[#1E3A8A] mb-1" />
                      <span className="text-[10px] text-[#2563EB] uppercase font-bold tracking-wider block">Coached Students</span>
                      <span className="text-xl font-bold text-[#1E293B]">{dbState?.students.length} Pupils</span>
                    </div>
                    <div className="bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-[#E2E8F0] text-center">
                      <BookOpen className="w-5 h-5 mx-auto text-[#1E3A8A] mb-1" />
                      <span className="text-[10px] text-[#2563EB] uppercase font-bold tracking-wider block">Issued Homework</span>
                      <span className="text-xl font-bold text-[#1E293B]">{dbState?.assignments.length} Tasks</span>
                    </div>
                    <div className="bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-[#E2E8F0] text-center">
                      <Bell className="w-5 h-5 mx-auto text-[#1E3A8A] mb-1" />
                      <span className="text-[10px] text-[#2563EB] uppercase font-bold tracking-wider block">Global Notices</span>
                      <span className="text-xl font-bold text-[#1E293B]">{dbState?.notices.length} Logs</span>
                    </div>
                    <div className="bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-[#E2E8F0] text-center">
                      <MessageSquare className="w-5 h-5 mx-auto text-[#1E3A8A] mb-1" />
                      <span className="text-[10px] text-[#2563EB] uppercase font-bold tracking-wider block">Parents Chats</span>
                      <span className="text-xl font-bold text-[#1E293B]">{dbState?.messages.length} Messages</span>
                    </div>
                  </div>

                  {/* ACTIVE TAB: DAILY ATTENDANCE LEDGER */}
                  {activeTab.teacher === "attendance" && (
                    <div className="bg-white/70 backdrop-blur-md border border-[#E2E8F0] rounded-[2rem] p-6 lg:p-8">
                      <h3 className="text-xl font-serif italic text-[#1E3A8A] mb-2">Mark Core Attendance Log</h3>
                      <p className="text-xs text-[#64748B] mb-6">Mark standard daily roll call indices for Grade 10 A.</p>
                      
                      <form onSubmit={handleMarkAttendanceSubmit} className="space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-[#E2E8F0] pb-4">
                          <div className="w-44">
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Calendar Ledger Date</label>
                            <input
                              type="date"
                              value={attendanceDate}
                              onChange={(e) => setAttendanceDate(e.target.value)}
                              className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                            />
                          </div>
                          <p className="text-xs text-[#64748B] sm:mt-5">Updating student profile metrics dynamically.</p>
                        </div>

                        <div className="space-y-3.5">
                          {dbState?.students.map((student) => {
                            const selectedStatus = attendanceMap[student.id] || "Present";
                            return (
                              <div key={student.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-[#F8FAFC] rounded-2xl style-border-1 border border-[#E2E8F0]">
                                <div className="flex items-center gap-3">
                                  <img src={student.avatar} alt={student.name} className="w-10 h-10 rounded-full object-cover border border-[#E2E8F0]" />
                                  <div>
                                    <p className="text-xs font-extrabold text-[#1E293B]">{student.name}</p>
                                    <p className="text-[10px] text-[#64748B]">Roll Call No: {student.rollNo} • Current Index: {student.attendance}%</p>
                                  </div>
                                </div>

                                <div className="flex gap-2">
                                  {(["Present", "Absent", "Late"] as const).map((status) => (
                                    <button
                                      key={status}
                                      type="button"
                                      onClick={() => setAttendanceMap(prev => ({ ...prev, [student.id]: status }))}
                                      className={`px-3 py-1.5 rounded-xl text-[10px] font-extrabold tracking-wider uppercase cursor-pointer transition-all ${
                                        selectedStatus === status
                                          ? status === "Present"
                                            ? "bg-emerald-600 text-white shadow-sm"
                                            : status === "Absent"
                                              ? "bg-rose-600 text-white shadow-sm"
                                              : "bg-amber-600 text-white shadow-sm"
                                          : "bg-white text-[#64748B] border border-[#E2E8F0] hover:bg-[#F1F5F9]"
                                      }`}
                                    >
                                      {status}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <button
                          type="submit"
                          className="px-6 py-3 bg-[#1E3A8A] text-white text-xs font-extrabold uppercase tracking-widest rounded-2xl hover:bg-[#4E4E36] transition-all cursor-pointer"
                        >
                          Submit Date Logs
                        </button>
                      </form>
                    </div>
                  )}

                  {/* ACTIVE TAB: MANAGE HOMEWORK INTRICATE FORM */}
                  {activeTab.teacher === "homework" && (
                    <div className="bg-white/70 backdrop-blur-md border border-[#E2E8F0] rounded-[2rem] p-6 lg:p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        <div className="lg:col-span-5 space-y-4">
                          <h3 className="text-lg font-serif italic text-[#1E3A8A]">Issue Class Homework</h3>
                          <p className="text-xs text-[#64748B]">A student receives immediate alerts and noticeboards are updated.</p>

                          <form onSubmit={handlePostHomeworkSubmit} className="space-y-4">
                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Coached Subject Module</label>
                              <select
                                value={postHomework.subject}
                                onChange={(e) => setPostHomework(prev => ({ ...prev, subject: e.target.value }))}
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                              >
                                {["Compulsory Mathematics", "Compulsory Science", "English", "Nepali", "Social Studies"].map(sub => (
                                  <option key={sub} value={sub}>{sub}</option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Homework Paper Title</label>
                              <input
                                type="text"
                                value={postHomework.title}
                                onChange={(e) => setPostHomework(prev => ({ ...prev, title: e.target.value }))}
                                placeholder="E.g., Quadratic Equations Practice Set 2"
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                              />
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Target Due Date</label>
                              <input
                                type="date"
                                value={postHomework.dueDate}
                                onChange={(e) => setPostHomework(prev => ({ ...prev, dueDate: e.target.value }))}
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold"
                              />
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Marks Weightage (Max Points)</label>
                              <input
                                type="number"
                                value={postHomework.totalPoints}
                                onChange={(e) => setPostHomework(prev => ({ ...prev, totalPoints: Number(e.target.value) }))}
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold"
                              />
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Detailed Technical Specifications</label>
                              <textarea
                                value={postHomework.description}
                                onChange={(e) => setPostHomework(prev => ({ ...prev, description: e.target.value }))}
                                placeholder="State exact equations, reference book page numbers, and presentation guidelines..."
                                rows={4}
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                              />
                            </div>

                            <button
                              type="submit"
                              className="w-full py-3 bg-[#1E3A8A] text-white text-xs font-extrabold uppercase tracking-wider rounded-2xl hover:bg-[#4E4E36] transition-all cursor-pointer"
                            >
                              Publish Homework Packet
                            </button>
                          </form>
                        </div>

                        {/* Assignments catalog listing */}
                        <div className="lg:col-span-7 bg-[#F1F5F9] border border-[#E2E8F0] p-6 rounded-3xl">
                          <h4 className="font-serif italic text-base text-[#1E3A8A] mb-4">Latest Homework Issues</h4>
                          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
                            {dbState?.assignments.map((as) => (
                              <div key={as.id} className="bg-white p-4 rounded-2xl border border-[#E2E8F0] space-y-1">
                                <span className="text-[9px] bg-[#1E3A8A] text-white px-2 py-0.5 rounded uppercase font-bold">{as.subject}</span>
                                <h5 className="text-xs font-extrabold text-[#1E293B] mt-1.5">{as.title}</h5>
                                <p className="text-[11px] text-[#64748B] line-clamp-2 italic">{as.description}</p>
                                <div className="pt-2 flex justify-between items-center text-[10px] text-[#2563EB] border-t border-[#F1F5F9] mt-2">
                                  <span>Score Cap: {as.totalPoints} PTS</span>
                                  <span className="font-bold text-rose-800">Due: {as.dueDate}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* ACTIVE TAB: GRADEBOOK SCORES INPUT ENTRY */}
                  {activeTab.teacher === "gradebook" && (
                    <div className="bg-white/70 backdrop-blur-md border border-[#E2E8F0] rounded-[2rem] p-6 lg:p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        <div className="lg:col-span-5 space-y-4">
                          <h3 className="text-lg font-serif italic text-[#1E3A8A]">Submit Scores Entry</h3>
                          <p className="text-xs text-[#64748B]">Maintain Gradebook marks registry for academic report cards.</p>

                          <form onSubmit={handleSubmitGrades} className="space-y-4">
                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Target Student Profile</label>
                              <select
                                value={enterScore.studentId}
                                onChange={(e) => setEnterScore(prev => ({ ...prev, studentId: e.target.value }))}
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                              >
                                {dbState?.students.map(st => (
                                  <option key={st.id} value={st.id}>{st.name} (Grade: {st.grade})</option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Terminal Assessment Period</label>
                              <select
                                value={enterScore.scoreType}
                                onChange={(e) => setEnterScore(prev => ({ ...prev, scoreType: e.target.value }))}
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                              >
                                <option value="firstTerm">First Term Exam Exam (Max 30)</option>
                                <option value="midTerm">Mid-Term Exam (Max 30)</option>
                                <option value="finalTerm">Final Term Board Exam (Max 40)</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Subject Branch</label>
                              <select
                                value={enterScore.subject}
                                onChange={(e) => setEnterScore(prev => ({ ...prev, subject: e.target.value }))}
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                              >
                                {["Compulsory Mathematics", "Compulsory Science", "English", "Nepali", "Social Studies"].map(sub => (
                                  <option key={sub} value={sub}>{sub}</option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Numerical Grade Mark Score Awarded</label>
                              <input
                                type="number"
                                value={enterScore.value}
                                onChange={(e) => setEnterScore(prev => ({ ...prev, value: Number(e.target.value) }))}
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold"
                              />
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Qualitative Remarks</label>
                              <input
                                type="text"
                                value={enterScore.remarks}
                                onChange={(e) => setEnterScore(prev => ({ ...prev, remarks: e.target.value }))}
                                placeholder="E.g., Superb analytic skills, keep solving more equations."
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold"
                              />
                            </div>

                            <button
                              type="submit"
                              className="w-full py-3 bg-[#1E3A8A] text-white text-xs font-extrabold uppercase tracking-wider rounded-2xl hover:bg-[#4E4E36] transition-all cursor-pointer"
                            >
                              Secure Registry Entry
                            </button>
                          </form>
                        </div>

                        {/* Dynamic Gradebook log dashboard overview */}
                        <div className="lg:col-span-7 bg-[#F1F5F9] border border-[#E2E8F0] p-6 rounded-3xl">
                          <h4 className="font-serif italic text-base text-[#1E3A8A] mb-4">Live Class Performance Dashboard</h4>
                          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
                            {dbState?.students.map(st => {
                              const sGrades = dbState.grades.filter(g => g.studentId === st.id);
                              return (
                                <div key={st.id} className="bg-white p-4 rounded-2xl border border-[#E2E8F0] space-y-2">
                                  <div className="flex justify-between items-center border-b border-[#F1F5F9] pb-1.5 text-xs font-bold text-[#1E293B]">
                                    <span>{st.name} (Roll: {st.rollNo})</span>
                                    <span className="text-[#B45F42] uppercase tracking-wide">Aggregate: {calculateAggregateGPA(sGrades)}</span>
                                  </div>
                                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {sGrades.map(sg => (
                                      <div key={sg.id} className="bg-[#F1F5F9] p-2 rounded-xl text-[10px] space-y-0.5">
                                        <p className="font-bold block truncate">{sg.subject}</p>
                                        <p className="text-[#64748B]">Total: {sg.firstTerm + sg.midTerm + sg.finalTerm} / 100</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* ACTIVE TAB: AI ASSIGNMENT EVALUATOR / GRADER CORE (GEMINI POWERED) */}
                  {activeTab.teacher === "feedback" && (
                    <div className="bg-white/70 backdrop-blur-md border border-[#E2E8F0] rounded-[2rem] p-6 lg:p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        {/* Grade Configuration */}
                        <div className="lg:col-span-5 space-y-5">
                          <div className="bg-[#1E3A8A]/5 p-5 rounded-3xl border border-[#1E3A8A]/10">
                            <span className="px-2 py-0.5 bg-[#1E3A8A] text-white text-[9px] font-bold rounded uppercase">Gemini Evaluation Engine</span>
                            <h3 className="text-base font-serif italic text-[#1E3A8A] mt-2">AI Homework Rubric Evaluator</h3>
                            <p className="text-[11px] text-[#64748B] mt-1">Review student essay text instantly! Gemini evaluates submissions based on 4 scoring rubrics and drafts precise teacher critiques.</p>
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Student Candidate</label>
                            <select
                              value={enterScore.studentId}
                              onChange={(e) => setEnterScore(prev => ({ ...prev, studentId: e.target.value }))}
                              className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                            >
                              {dbState?.students.map(st => (
                                <option key={st.id} value={st.id}>{st.name}</option>
                              ))}
                            </select>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Subject Group</label>
                              <select
                                value={essaySubject}
                                onChange={(e) => setEssaySubject(e.target.value)}
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                              >
                                {["Compulsory Mathematics", "Compulsory Science", "English", "Nepali", "Social Studies"].map(sub => (
                                  <option key={sub} value={sub}>{sub}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Assignment Title</label>
                              <input
                                type="text"
                                value={essayTitle}
                                onChange={(e) => setEssayTitle(e.target.value)}
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                              />
                            </div>
                          </div>

                          {/* Essay Submission text */}
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Student Submission Essay/Text Draft</label>
                            <textarea
                              value={essayText}
                              onChange={(e) => setEssayText(e.target.value)}
                              rows={8}
                              placeholder="Copy & paste student submission content here..."
                              className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                            />
                            <span className="block text-[10px] text-[#64748B] text-right mt-1">Chars count: {essayText.length}</span>
                          </div>

                          <button
                            onClick={executeEssayGradingAI}
                            disabled={essayAILoading}
                            className={`w-full py-3 rounded-2xl text-xs font-extrabold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer ${
                              essayAILoading ? "bg-[#64748B] text-white cursor-not-allowed" : "bg-[#B45F42] text-white hover:bg-amber-900 active:scale-[0.98]"
                            }`}
                          >
                            <Sparkles className="w-4 h-4" />
                            {essayAILoading ? "Grading and drafting via AI..." : "Evaluate Submission with AI"}
                          </button>
                        </div>

                        {/* Evaluation rubric page */}
                        <div className="lg:col-span-7 bg-[#F1F5F9] border border-[#E2E8F0] rounded-3xl p-6 min-h-[300px] relative">
                          {!essayAIResult && !essayAILoading && (
                            <div className="h-full flex flex-col items-center justify-center text-center opacity-70 absolute inset-0 p-6">
                              <FileText className="w-12 h-12 text-[#2563EB] mb-3" />
                              <p className="font-serif italic text-sm text-[#1E3A8A]">Awaiting submission upload.</p>
                              <p className="text-[10px] text-[#64748B] mt-1">Select a student essay draft and trigger evaluation to load Lhotse Rubric Sheet.</p>
                            </div>
                          )}

                          {essayAILoading && (
                            <div className="h-full flex flex-col items-center justify-center text-center absolute inset-0 p-6">
                              <div className="border-4 border-[#1E3A8A] border-t-transparent rounded-full w-10 h-10 animate-spin mb-4"></div>
                              <p className="font-serif italic text-sm text-[#1E3A8A] animate-pulse">Running rubric grading engine via Gemini...</p>
                            </div>
                          )}

                          {essayAIResult && (
                            <div className="space-y-4 animate-fade-in text-xs">
                              <div className="flex justify-between items-center border-b border-[#E2E8F0] pb-3">
                                <div>
                                  <h4 className="font-serif text-base text-[#1E3A8A] font-bold">Lhotse Rubric Appraisal Report</h4>
                                  <p className="text-[10px] text-[#64748B] mt-0.5">Appraised Candidate: {dbState?.students.find(s => s.id === enterScore.studentId)?.name}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-2xl font-serif italic text-[#B45F42] leading-none">{essayAIResult.letterGrade}</p>
                                  <p className="text-[10px] font-bold text-[#2563EB] mt-1">Score: {essayAIResult.overallScore}/100</p>
                                </div>
                              </div>

                              {/* Rubrics axes breakdown */}
                              <div className="bg-[#DFDCD4] p-3 rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                                <div>
                                  <span className="block text-[8px] text-[#1E293B] font-bold uppercase tracking-wider">Understanding</span>
                                  <span className="text-sm font-serif font-bold text-[#1E3A8A]">{essayAIResult.rubricPoints?.understanding} / 25</span>
                                </div>
                                <div>
                                  <span className="block text-[8px] text-[#1E293B] font-bold uppercase tracking-wider">Flow & Structure</span>
                                  <span className="text-sm font-serif font-bold text-[#1E3A8A]">{essayAIResult.rubricPoints?.structure} / 25</span>
                                </div>
                                <div>
                                  <span className="block text-[8px] text-[#1E293B] font-bold uppercase tracking-wider">Grammar & Syntax</span>
                                  <span className="text-sm font-serif font-bold text-[#1E3A8A]">{essayAIResult.rubricPoints?.grammar} / 25</span>
                                </div>
                                <div>
                                  <span className="block text-[8px] text-[#1E293B] font-bold uppercase tracking-wider">Creativity & Style</span>
                                  <span className="text-sm font-serif font-bold text-[#1E3A8A]">{essayAIResult.rubricPoints?.creativity} / 25</span>
                                </div>
                              </div>

                              {/* Strengths */}
                              <div>
                                <h5 className="font-bold text-[#1E3A8A] uppercase text-[9px] tracking-wider mb-1">Identified Strengths</h5>
                                <div className="space-y-1">
                                  {essayAIResult.strengths?.map((str: string, index: number) => (
                                    <p key={index} className="text-[10.5px] text-[#1E293B] bg-emerald-50/70 p-2 rounded-lg border-l-2 border-emerald-500">
                                      👉 {str}
                                    </p>
                                  ))}
                                </div>
                              </div>

                              {/* Areas for Improvement */}
                              <div>
                                <h5 className="font-bold text-[#B45F42] uppercase text-[9px] tracking-wider mb-1">Growth & Improvement Advice</h5>
                                <div className="space-y-1">
                                  {essayAIResult.improvements?.map((imp: string, index: number) => (
                                    <p key={index} className="text-[10.5px] text-[#1E293B] bg-orange-50/70 p-2 rounded-lg border-l-2 border-[#B45F42]">
                                      🔧 {imp}
                                    </p>
                                  ))}
                                </div>
                              </div>

                              {/* Detailed teacher commentary */}
                              <div className="bg-white p-4 rounded-2xl border border-dashed border-[#E2E8F0] mt-3">
                                <h5 className="font-serif italic text-xs text-[#1E3A8A] border-b border-[#F1F5F9] pb-1 mb-2">Teacher Evaluation Statement (Personalized)</h5>
                                <p className="text-[11px] leading-relaxed text-[#1E293B] italic">
                                  "{essayAIResult.detailedCritique}"
                                </p>
                              </div>

                              {/* Action to submit grading direct registry */}
                              <button
                                onClick={async () => {
                                  try {
                                    const res = await fetch("/api/grades", {
                                      method: "POST",
                                      headers: { "Content-Type": "application/json" },
                                      body: JSON.stringify({
                                        studentId: enterScore.studentId,
                                        subject: essaySubject,
                                        scoreType: "midTerm", // Default review term
                                        value: Math.round((essayAIResult.overallScore / 100) * 30), // Map weightage to 30 marks scale
                                        remarks: `AI Eval: ${essayAIResult.letterGrade} - ${essayAIResult.strengths?.[0] || 'Good effort'}`
                                      })
                                    });
                                    if (!res.ok) throw new Error("Grade Submission Failed");
                                    await syncDatabase();
                                    alert("Review registered in central Grades ledger!");
                                  } catch (err: any) {
                                    alert(err.message);
                                  }
                                }}
                                className="w-full py-2 bg-emerald-600 text-white font-extrabold uppercase tracking-widest rounded-xl text-center"
                              >
                                Commit Score to Core Gradebook Card
                              </button>
                            </div>
                          )}
                        </div>

                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ==================== 3. PARENT PORTAL ==================== */}
              {activeRole === "parent" && (
                <div className="space-y-6">
                  {/* Inform parents what student we are watching */}
                  <div className="bg-[#1E3A8A]/10 p-5 rounded-[2rem] border border-[#1E3A8A]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="font-serif italic text-lg text-[#1E3A8A]">Monitoring Profile of: {studentProfile.name}</h3>
                      <p className="text-xs text-[#64748B] mt-0.5">Logged parent guardian linkage: {parentProfile.name} ({parentProfile.relation}) • Contact: {parentProfile.contact}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3.5 py-1 bg-white/80 border border-[#E2E8F0] rounded-full text-xs font-bold text-[#1E3A8A]">
                        Attendance Log: {studentProfile.attendance}%
                      </span>
                    </div>
                  </div>

                  {/* ACTIVE TAB: ACADEMIC TERMINAL GRADES SHEET FOR CHILD */}
                  {activeTab.parent === "performance" && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      
                      {/* Detailed terminal card */}
                      <div className="lg:col-span-8 bg-white/70 backdrop-blur-md border border-[#E2E8F0] rounded-[2rem] p-6 lg:p-8">
                        <div className="border-b border-[#E2E8F0] pb-4 mb-4 flex justify-between items-center">
                          <div>
                            <h4 className="font-serif italic text-base text-[#1E3A8A]">Term Report Card Summary</h4>
                            <p className="text-xs text-[#64748B]">Real-time results sync directly from specialists.</p>
                          </div>
                          <span className="text-xs bg-[#1E3A8A] text-white font-bold py-1 px-3 rounded-lg">
                            Class GPA Index: {calculateAggregateGPA(studentGrades)}
                          </span>
                        </div>

                        <div className="space-y-3.5">
                          {studentGrades.map((gRec) => {
                            const sumTotal = gRec.firstTerm + gRec.midTerm + gRec.finalTerm;
                            return (
                              <div key={gRec.id} className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] flex justify-between items-start">
                                <div>
                                  <p className="font-extrabold text-[#1E293B] text-xs">{gRec.subject}</p>
                                  <p className="text-[11px] text-[#2563EB] mt-1">Teacher Statement: <span className="italic text-[#64748B]">"{gRec.remarks || 'Keep regular analytical practice.'}"</span></p>
                                </div>
                                <div className="text-right shrink-0">
                                  <span className="text-xs font-serif font-black text-[#1E3A8A] block">{sumTotal} / 100</span>
                                  <span className="text-[9px] uppercase font-bold text-[#64748B]">Passed Status</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Daily attendance live logs */}
                      <div className="lg:col-span-4 bg-white/70 backdrop-blur-md border border-[#E2E8F0] rounded-[2rem] p-6 lg:p-8">
                        <h4 className="font-serif italic text-base text-[#1E3A8A] mb-3">Today's Attendance Warning</h4>
                        <div className="space-y-3">
                          <div className="p-3.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs text-center font-bold">
                            ✔ Child is present today in classroom 301.
                          </div>
                          
                          <p className="text-[10px] uppercase text-[#2563EB] tracking-wider font-bold mt-4 block">Historical Calendar Checklogs</p>
                          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                            {dbState?.attendanceLogs.filter(log => log.studentId === selectedStudentId).map((item, idx) => (
                              <div key={idx} className="flex justify-between items-center text-xs p-2 bg-[#FBDC] border border-[#E2E8F0] rounded-xl bg-white/30">
                                <span className="text-[#1E293B] font-bold">{item.date}</span>
                                <span className={`px-2 py-0.5 rounded text-[9px] font-extrabold text-white ${
                                  item.status === 'Present' ? 'bg-emerald-600' : item.status === 'Late' ? 'bg-amber-600' : 'bg-rose-600'
                                }`}>
                                  {item.status}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* ACTIVE TAB: TUITION FEES STATEMENTS & DIRECT SECURE PAYMENT */}
                  {activeTab.parent === "fees" && (
                    <div className="bg-white/70 backdrop-blur-md border border-[#E2E8F0] rounded-[2rem] p-6 lg:p-8">
                      <div className="border-b border-[#E2E8F0] pb-4 mb-6">
                        <h3 className="text-xl font-serif italic text-[#1E3A8A]">Billing Ledgers & Online Fee Settlement</h3>
                        <p className="text-xs text-[#64748B]">Settled invoices are published with instant formal school vouchers.</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {parentInvoices.map((bill) => (
                          <div key={bill.id} className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-3xl p-6 flex flex-col justify-between relative group">
                            <span className={`absolute top-4 right-4 px-2.5 py-0.5 rounded text-[9px] font-extrabold text-white tracking-widest ${
                              bill.status === "Paid" ? "bg-emerald-600" : "bg-rose-600 animate-pulse"
                            }`}>
                              {bill.status}
                            </span>

                            <div>
                              <h4 className="text-sm font-extrabold text-[#1E293B] pr-12">{bill.title}</h4>
                              <p className="text-2xl font-serif italic text-[#1E3A8A] mt-2">Rs. {bill.amount}</p>
                              <p className="text-[10px] text-[#64748B] mt-0.5">Published Payment Target limit: {bill.dueDate}</p>
                              
                              <p className="text-[10px] uppercase font-bold text-[#2563EB] tracking-[0.1em] mt-4 block">Itemized Statement Details</p>
                              <ul className="text-[11px] text-[#1E293B]/85 space-y-1.5 mt-2 bg-white/50 p-3 rounded-xl border border-[#E2E8F0]">
                                {bill.items.map((lineItem, idx) => (
                                  <li key={idx} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#B45F42] rounded-full"></span>
                                    <span>{lineItem}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-4 border-t border-[#E2E8F0] mt-5">
                              {bill.status === "Unpaid" ? (
                                <button
                                  onClick={() => handlePayFeeStatement(bill.id)}
                                  className="w-full py-2.5 bg-rose-600 text-white text-xs font-extrabold uppercase tracking-widest rounded-xl hover:bg-rose-800 transition-all cursor-pointer"
                                >
                                  Process Payment Ledger
                                </button>
                              ) : (
                                <div className="flex items-center justify-center gap-2 py-2 text-emerald-800 font-extrabold bg-emerald-100/60 border border-emerald-300 rounded-xl text-xs">
                                  <CheckSquare className="w-4 h-4" /> Passed & Settled on {bill.paidDate || 'Today'}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ACTIVE TAB: PARENT-TEACHER DIALOG MESSAGE HUB */}
                  {activeTab.parent === "chat" && (
                    <div className="bg-white/70 backdrop-blur-md border border-[#E2E8F0] rounded-[2rem] p-6 lg:p-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#E2E8F0] pb-4 mb-4 gap-2">
                        <div>
                          <h3 className="text-lg font-serif italic text-[#1E3A8A]">Direct Chat Message Center</h3>
                          <p className="text-xs text-[#64748B]">Class Teacher Liaison specialist: Mrs. Sunita Adhikari</p>
                        </div>
                        <span className="px-3 py-1 bg-[#F1F5F9] border border-[#E2E8F0] text-[#1E3A8A] rounded-xl text-xs font-bold shrink-0 self-start md:self-center">
                          Active Channel
                        </span>
                      </div>

                      {/* Chat screen list */}
                      <div className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-3xl p-4 h-[350px] overflow-y-auto space-y-4 mb-4">
                        {currentChatLogs.map((msg) => {
                          const isParent = msg.sender === "parent";
                          return (
                            <div key={msg.id} className={`flex ${isParent ? "justify-end" : "justify-start"}`}>
                              <div className={`max-w-[85%] rounded-2xl p-3.5 text-xs shadow-sm ${
                                isParent 
                                  ? "bg-[#1E3A8A] text-white rounded-tr-none" 
                                  : "bg-white text-[#1E293B] border border-[#E2E8F0] rounded-tl-none"
                              }`}>
                                <div className="flex justify-between items-center text-[9px] opacity-75 mb-1 gap-4">
                                  <span className="font-extrabold uppercase">{isParent ? "Parent राजेश शर्मा" : "Tutor सुनीता अधिकारी"}</span>
                                  <span>{msg.timestamp.substring(11, 16)}</span>
                                </div>
                                <p className="leading-relaxed whitespace-pre-line">{msg.message}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Message typewriter box */}
                      <form onSubmit={handleSendChatMessage} className="flex gap-2">
                        <textarea
                          value={parentsChatText}
                          onChange={(e) => setParentsChatText(e.target.value)}
                          placeholder="Submit polite query message to teacher Mrs. Sunita Adhikari..."
                          rows={2}
                          className="flex-1 p-3 bg-white border border-[#E2E8F0] rounded-2xl text-xs font-semibold focus:outline-none"
                        />
                        <button
                          type="submit"
                          className="px-5 bg-[#1E3A8A] hover:bg-[#4E3E29] text-white rounded-2xl flex items-center justify-center shrink-0 cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              )}

              {/* ==================== 4. ADMIN DASHBOARD ==================== */}
              {activeRole === "admin" && (
                <div className="space-y-6">
                  {/* Tab Selector buttons */}
                  
                  {/* ACTIVE TAB: INVOICING DRAWER SYSTEM */}
                  {activeTab.admin === "invoice" && (
                    <div className="bg-white/70 backdrop-blur-md border border-[#E2E8F0] rounded-[2rem] p-6 lg:p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        <div className="lg:col-span-5 space-y-4">
                          <h3 className="text-lg font-serif italic text-[#1E3A8A]">Draft New Student Ledger Bill</h3>
                          <p className="text-xs text-[#64748B]">Invoices are immediately logged into the parent fee console.</p>

                          <form onSubmit={handleGenerateInvoiceSubmit} className="space-y-4">
                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Target Parent Profile</label>
                              <select
                                value={newInvoiceForm.parentId}
                                onChange={(e) => setNewInvoiceForm(prev => ({ ...prev, parentId: e.target.value }))}
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                              >
                                {dbState?.parents.map(par => (
                                  <option key={par.id} value={par.id}>{par.name} ({par.relation})</option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Invoice Billing Heading</label>
                              <input
                                type="text"
                                value={newInvoiceForm.title}
                                onChange={(e) => setNewInvoiceForm(prev => ({ ...prev, title: e.target.value }))}
                                placeholder="E.g., Second Term Tuition Fees"
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Aggregate Cost Amount (Rs.)</label>
                                <input
                                  type="number"
                                  value={newInvoiceForm.amount}
                                  onChange={(e) => setNewInvoiceForm(prev => ({ ...prev, amount: Number(e.target.value) }))}
                                  className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold"
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Target Due Date</label>
                                <input
                                  type="date"
                                  value={newInvoiceForm.dueDate}
                                  onChange={(e) => setNewInvoiceForm(prev => ({ ...prev, dueDate: e.target.value }))}
                                  className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Breakdown line items (Per line)</label>
                              <textarea
                                value={newInvoiceForm.itemsText}
                                onChange={(e) => setNewInvoiceForm(prev => ({ ...prev, itemsText: e.target.value }))}
                                placeholder="E.g.:&#10;Tuition Fee: Rs. 12000&#10;Sports Fund: Rs. 1000"
                                rows={4}
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                              />
                            </div>

                            <button
                              type="submit"
                              className="w-full py-3 bg-[#1E3A8A] text-white text-xs font-extrabold uppercase tracking-wide rounded-2xl hover:bg-[#4E4E36] transition-all cursor-pointer"
                            >
                              Dispatch Registered Bill
                            </button>
                          </form>
                        </div>

                        {/* Invoice monitoring */}
                        <div className="lg:col-span-7 bg-[#F1F5F9] border border-[#E2E8F0] p-6 rounded-3xl">
                          <h4 className="font-serif italic text-base text-[#1E3A8A] mb-4">Outstanding School Accounts Ledger</h4>
                          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
                            {dbState?.billing.map((bl) => {
                              const matchingParent = dbState.parents.find(p => p.id === bl.parentId);
                              return (
                                <div key={bl.id} className="bg-white p-4 rounded-2xl border border-[#E2E8F0]">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h5 className="text-xs font-bold text-[#1E293B]">{bl.title}</h5>
                                      <p className="text-[10px] text-[#64748B] italic">Ascribed to: {matchingParent?.name || 'Lhotse Parent'}</p>
                                    </div>
                                    <span className={`px-2 py-0.5 rounded text-[8px] font-extrabold text-white tracking-widest ${
                                      bl.status === "Paid" ? "bg-emerald-600" : "bg-rose-600 animate-pulse"
                                    }`}>
                                      {bl.status}
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center text-[11px] pt-2 border-t border-[#F1F5F9] mt-2">
                                    <span className="font-serif bold text-[#1E3A8A]">Amount: Rs. {bl.amount}</span>
                                    <span className="text-[#64748B]">Limit target: {bl.dueDate}</span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* ACTIVE TAB: BULLETIN NOTICES CREATION BOARD */}
                  {activeTab.admin === "notices" && (
                    <div className="bg-white/70 backdrop-blur-md border border-[#E2E8F0] rounded-[2rem] p-6 lg:p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        <div className="lg:col-span-5 space-y-4">
                          <h3 className="text-lg font-serif italic text-[#1E3A8A]">Publish School Circular Banner</h3>
                          <p className="text-xs text-[#64748B]">Announcements are immediately published on all main dashboards.</p>

                          <form onSubmit={handleCreateNoticeSubmit} className="space-y-4">
                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Circular Heading Title</label>
                              <input
                                type="text"
                                value={newNoticeForm.title}
                                onChange={(e) => setNewNoticeForm(prev => ({ ...prev, title: e.target.value }))}
                                placeholder="E.g., Summer Recess Declaration"
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Priority Classification</label>
                                <select
                                  value={newNoticeForm.priority}
                                  onChange={(e) => setNewNoticeForm(prev => ({ ...prev, priority: e.target.value }))}
                                  className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                                >
                                  <option value="Urgent">Urgent Warning</option>
                                  <option value="Info">General Info</option>
                                  <option value="Calendar">Academic Calendar</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Official Sender Header</label>
                                <input
                                  type="text"
                                  value={newNoticeForm.sender}
                                  onChange={(e) => setNewNoticeForm(prev => ({ ...prev, sender: e.target.value }))}
                                  className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Circular takeaways (Per line)</label>
                              <textarea
                                value={newNoticeForm.keyPointsText}
                                onChange={(e) => setNewNoticeForm(prev => ({ ...prev, keyPointsText: e.target.value }))}
                                placeholder="E.g.:&#10;Key Date: Jestha 25&#10;Duration: 10 Days"
                                rows={3}
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold"
                              />
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Main Circular Content block description</label>
                              <textarea
                                value={newNoticeForm.content}
                                onChange={(e) => setNewNoticeForm(prev => ({ ...prev, content: e.target.value }))}
                                placeholder="Begin official address details..."
                                rows={5}
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                              />
                            </div>

                            <button
                              type="submit"
                              className="w-full py-3 bg-[#1E3A8A] text-white text-xs font-extrabold uppercase tracking-wide rounded-2xl hover:bg-[#4E4E36] transition-all cursor-pointer"
                            >
                              Dispatch Notice Circular
                            </button>
                          </form>
                        </div>

                        {/* Live Noticeboard List */}
                        <div className="lg:col-span-7 bg-[#F1F5F9] border border-[#E2E8F0] p-6 rounded-3xl">
                          <h4 className="font-serif italic text-base text-[#1E3A8A] mb-4">Lhotse Active Circular Noticeboard</h4>
                          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
                            {dbState?.notices.map((nt) => (
                              <div key={nt.id} className="bg-white p-5 rounded-2xl border-l-4 border-[#B45F42] shadow-sm space-y-2">
                                <div className="flex justify-between items-start text-xs font-bold">
                                  <h5 className="text-[#1E293B] text-sm font-serif italic">{nt.title}</h5>
                                  <span className="text-[10px] text-[#2563EB]">{nt.date}</span>
                                </div>
                                <p className="text-[11px] text-[#64748B] uppercase tracking-wide font-extrabold">Sender: {nt.sender} • {nt.priority} Category</p>
                                <p className="text-xs text-[#1E293B]/90 whitespace-pre-line leading-relaxed">{nt.content}</p>
                                {nt.keyPoints && nt.keyPoints.length > 0 && (
                                  <div className="bg-[#F1F5F9] p-3 rounded-xl border border-[#E2E8F0] space-y-1 mt-2">
                                    {nt.keyPoints.map((pt, pIdx) => (
                                      <p key={pIdx} className="text-[10.5px] text-[#1E3A8A] font-bold">🎯 {pt}</p>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* ACTIVE TAB: AI NOTICE WRITER SEAMLESS CREATOR (GEMINI POWERED) */}
                  {activeTab.admin === "writernotice" && (
                    <div className="bg-white/70 backdrop-blur-md border border-[#E2E8F0] rounded-[2rem] p-6 lg:p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        {/* Interactive configuration */}
                        <div className="lg:col-span-5 space-y-5">
                          <div className="bg-[#1E3A8A]/5 p-5 rounded-3xl border border-[#1E3A8A]/10">
                            <span className="px-2 py-0.5 bg-[#1E3A8A] text-white text-[9px] font-bold rounded uppercase">Gemini Notice Craftsman</span>
                            <h3 className="text-base font-serif italic text-[#1E3A8A] mt-2">Automated Circular Writer</h3>
                            <p className="text-[11px] text-[#64748B] mt-1">Input rough bullet points representing school alerts, select a target audience and tone. Gemini will instantly draft standard school letters matching classical, respectful Nepalese layouts!</p>
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Bulletin Bullet Notes</label>
                            <textarea
                              value={bulletinNotes}
                              onChange={(e) => setBulletinNotes(e.target.value)}
                              rows={5}
                              placeholder="Write raw bullet details..."
                              className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Recipient Audience</label>
                              <select
                                value={bulletinAudience}
                                onChange={(e) => setBulletinAudience(e.target.value)}
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                              >
                                <option value="All Parents, Guardians, and Teachers">All Parents & Guardians</option>
                                <option value="Only Grade 10 Student Cohort">Only Grade 10 Cohort</option>
                                <option value="Active Teaching & Academic Staff">Active Academic Staff</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] mb-1">Preferred Writing Tone</label>
                              <input
                                type="text"
                                value={bulletinTone}
                                onChange={(e) => setBulletinTone(e.target.value)}
                                className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold focus:outline-none"
                              />
                            </div>
                          </div>

                          <button
                            onClick={executeNoticeDraftAI}
                            disabled={bulletinAILoading}
                            className={`w-full py-3 rounded-2xl text-xs font-extrabold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer ${
                              bulletinAILoading ? "bg-[#64748B] text-white cursor-not-allowed" : "bg-[#1E3A8A] text-white hover:bg-[#4E4E36] active:scale-[0.98]"
                            }`}
                          >
                            <Sparkles className="w-4 h-4" />
                            {bulletinAILoading ? "Drafting Document with AI..." : "Draft Official Circular With AI"}
                          </button>
                        </div>

                        {/* AI Return Output Paper Sheet */}
                        <div className="lg:col-span-7 bg-[#F1F5F9] border border-[#E2E8F0] rounded-3xl p-6 min-h-[300px] relative font-serif">
                          {!bulletinAIResult && !bulletinAILoading && (
                            <div className="h-full flex flex-col items-center justify-center text-center opacity-70 absolute inset-0 p-6 font-sans">
                              <Bell className="w-12 h-12 text-[#2563EB] mb-3" />
                              <p className="font-serif italic text-sm text-[#1E3A8A]">Awaiting bulletin notes input.</p>
                              <p className="text-[10px] text-[#64748B] mt-1">Provide brief bulletins and click "Draft Official Circular With AI" above to launch.</p>
                            </div>
                          )}

                          {bulletinAILoading && (
                            <div className="h-full flex flex-col items-center justify-center text-center absolute inset-0 p-6 font-sans">
                              <div className="border-4 border-[#B45F42] border-t-transparent rounded-full w-10 h-10 animate-spin mb-4"></div>
                              <p className="font-serif italic text-sm text-[#B45F42] animate-pulse">Expanding bulletin drafts in standard letter format with Gemini...</p>
                            </div>
                          )}

                          {bulletinAIResult && (
                            <div className="space-y-4 animate-fade-in text-xs text-[#1E293B]">
                              {/* Letterhead */}
                              <div className="text-center pb-3 border-b-2 border-double border-[#E2E8F0] font-sans">
                                <h4 className="font-display font-black text-[#1E3A8A] text-sm uppercase tracking-wider">Lhotse English Secondary School</h4>
                                <p className="text-[9px] text-[#2563EB] uppercase tracking-widest mt-0.5">Mechinagar-9, Dhulabari, Jhapa • Phone: +977-23-XXXXXX</p>
                                <span className="inline-block mt-2 px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 text-[8px] font-bold tracking-widest leading-none">
                                  OFFICIAL ANNOUNCEMENT CIRCULAR
                                </span>
                              </div>

                              <div>
                                <h5 className="text-sm font-bold text-[#1E3A8A] underline decoration-offset-2 leading-tight">
                                  {bulletinAIResult.headline}
                                </h5>
                                <div className="flex justify-between items-center text-[10px] text-[#64748B] font-sans mt-1">
                                  <span>To: {bulletinAIResult.targetAudience}</span>
                                  <span>Date: Jestha 2083 (Nepal B.S.)</span>
                                </div>
                              </div>

                              <p className="text-[11px] leading-relaxed text-[#1E293B] whitespace-pre-line italic">
                                "{bulletinAIResult.body}"
                              </p>

                              {/* Takeaways bullet panel */}
                              {bulletinAIResult.keyTakeaways && (
                                <div className="bg-white/80 p-3 rounded-xl border border-[#E2E8F0] font-sans">
                                  <span className="block text-[9px] font-extrabold text-[#2563EB] uppercase tracking-wider mb-1">Key Action Takeaways</span>
                                  <ul className="space-y-1">
                                    {bulletinAIResult.keyTakeaways?.map((take: string, idx: number) => (
                                      <li key={idx} className="text-[10px] text-[#1E3A8A] font-bold">
                                        📌 {take}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              <div className="pt-3 border-t border-[#E2E8F0] text-right font-sans">
                                <p className="text-xs font-bold text-[#1E3A8A]">{bulletinAIResult.pennedBy || "Office of the Principal"}</p>
                                <p className="text-[9px] text-[#2563EB] uppercase tracking-widest mt-0.5">Lhotse Administration</p>
                              </div>

                              <button
                                onClick={publishAIDraftedNotice}
                                className="w-full py-2 bg-emerald-600 text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl mt-4"
                              >
                                Approve & Publish to Virtual Noticeboard
                              </button>
                            </div>
                          )}
                        </div>

                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </main>

    </div>
  );
}
