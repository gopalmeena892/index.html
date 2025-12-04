// 50 MCQs Data (Question, Options, Correct Answer, Explanation)
const questions = [
    { q: "1. What is the primary function of an Operating System?", a: ["To manage hardware resources", "To compile programs", "To design databases", "To create graphics"], correct: 0, exp: "OS acts as an intermediary between user and hardware." },
    { q: "2. Which of the following is not a type of Operating System?", a: ["Batch OS", "Time-Sharing OS", "Distributed OS", "Compiler OS"], correct: 3, exp: "Compiler OS doesn't exist; others are standard types." },
    { q: "3. In which OS is the kernel the core component?", a: ["All OS", "Windows only", "Linux only", "Android only"], correct: 0, exp: "Kernel is core in every OS." },
    { q: "4. What does GUI stand for in Operating Systems?", a: ["Graphical User Interface", "General User Input", "Global Utility Interface", "Graphic Utility Input"], correct: 0, exp: "GUI allows visual interaction with OS." },
    { q: "5. Which scheduling algorithm is used in Round Robin?", a: ["First Come First Serve", "Shortest Job First", "Time slicing", "Priority based"], correct: 2, exp: "Round Robin uses time quanta for fairness." },
    { q: "6. What is a deadlock in OS?", a: ["A process waiting indefinitely", "A completed process", "Memory overflow", "File deletion error"], correct: 0, exp: "Deadlock occurs when processes wait for each other." },
    { q: "7. Virtual memory is used to:", a: ["Extend RAM using hard disk", "Delete files", "Format disks", "Install software"], correct: 0, exp: "It simulates more RAM than physically available." },
    { q: "8. Which is an example of a Real-Time OS?", a: ["Windows 10", "RTOS like VxWorks", "MS-DOS", "Ubuntu"], correct: 1, exp: "RTOS handles time-critical tasks." },
    { q: "9. What manages files and directories in OS?", a: ["File System", "Processor", "RAM", "BIOS"], correct: 0, exp: "File system organizes data storage." },
    { q: "10. Paging in OS is related to:", a: ["Memory Management", "Process Scheduling", "Device Control", "User Interface"], correct: 0, exp: "Paging divides memory into fixed-size pages." },
    { q: "11. Which OS is open-source?", a: ["Windows", "macOS", "Linux", "iOS"], correct: 2, exp: "Linux is freely modifiable." },
    { q: "12. What is the role of Shell in OS?", a: ["Interface between user and kernel", "Hardware driver", "Memory allocator", "Compiler"], correct: 0, exp: "Shell interprets commands." },
    { q: "13. FCFS stands for:", a: ["First Come First Served", "Fastest Computation First Served", "Fixed Capacity File System", "File Control File System"], correct: 0, exp: "Processes execute in arrival order." },
    { q: "14. In Multiprogramming, multiple processes are in:", a: ["Memory at the same time", "Execution one by one", "Deleted state", "Input queue only"], correct: 0, exp: "Improves CPU utilization." },
    { q: "15. What is Thrashing in OS?", a: ["Excessive paging", "Process creation", "File copying", "Virus attack"], correct: 0, exp: "Too much swapping degrades performance." },
    { q: "16. Which is not a function of OS?", a: ["Process Management", "Memory Management", "Network Design", "Security Management"], correct: 2, exp: "Network design is application-level." },
    { q: "17. Android OS is based on:", a: ["Linux Kernel", "Windows Kernel", "macOS Kernel", "Custom Kernel"], correct: 0, exp: "Built on Linux for stability." },
    { q: "18. What is a Process in OS?", a: ["Program in execution", "Stored file", "Hardware device", "User input"], correct: 0, exp: "Dynamic instance of a program." },
    { q: "19. SJF scheduling is:", a: ["Shortest Job First", "Simple Job First", "System Job First", "Sequential Job First"], correct: 0, exp: "Minimizes waiting time." },
    { q: "20. FAT stands for in file systems:", a: ["File Allocation Table", "Fast Access Table", "File Access Time", "Folder Allocation Table"], correct: 0, exp: "Used in older Windows systems." },
    { q: "21. What prevents deadlock?", a: ["Banker's Algorithm", "Paging", "Compiling", "Formatting"], correct: 0, exp: "Avoids unsafe states." },
    { q: "22. Which OS uses NTFS file system?", a: ["Windows", "Linux", "Android", "macOS"], correct: 0, exp: "NTFS is Windows' default." },
    { q: "23. Multitasking OS allows:", a: ["Running multiple programs simultaneously", "Single program only", "Hardware shutdown", "File deletion"], correct: 0, exp: "Simulates concurrency." },
    { q: "24. What is Semaphore in OS?", a: ["Synchronization tool", "Memory type", "File format", "Input device"], correct: 0, exp: "Controls access to resources." },
    { q: "25. UNIX is an example of:", a: ["Multi-user OS", "Single-user OS", "Batch OS", "Real-time OS"], correct: 0, exp: "Supports multiple users." },
    { q: "26. What is the boot process?", a: ["Starting the OS", "Shutting down", "Installing apps", "Printing files"], correct: 0, exp: "Loads OS into memory." },
    { q: "27. In OS, Interrupt is:", a: ["Signal to processor", "Error message", "File name", "User command"], correct: 0, exp: "Requests immediate attention." },
    { q: "28. Which is a Mobile OS?", a: ["Android", "Windows Server", "Linux Desktop", "MS-DOS"], correct: 0, exp: "Designed for touch devices." },
    { q: "29. Priority Scheduling assigns priority to:", a: ["Processes", "Files", "Devices", "Users"], correct: 0, exp: "Higher priority first." },
    { q: "30. What is Fragmentation in memory?", a: ["Wasted space", "Full memory", "Process end", "File save"], correct: 0, exp: "External or internal unused gaps." },
    { q: "31. ext4 is file system for:", a: ["Linux", "Windows", "macOS", "Android"], correct: 0, exp: "Linux's journaling file system." },
    { q: "32. What manages I/O devices?", a: ["Device Manager", "File Manager", "Process Manager", "Memory Manager"], correct: 0, exp: "Handles input/output operations." },
    { q: "33. In OS, Spooling is for:", a: ["Printer management", "Memory allocation", "Process creation", "File editing"], correct: 0, exp: "Temporary storage for jobs." },
    { q: "34. Which algorithm is non-preemptive?", a: ["FCFS", "Round Robin", "Priority", "Multilevel"], correct: 0, exp: "No interruption once started." },
    { q: "35. What is Kernel mode?", a: ["Privileged execution", "User execution", "Error mode", "Sleep mode"], correct: 0, exp: "Full hardware access." },
    { q: "36. iOS is developed by:", a: ["Apple", "Google", "Microsoft", "Linux Foundation"], correct: 0, exp: "For iPhone/iPad devices." },
    { q: "37. What is a Thread?", a: ["Lightweight process", "Heavy process", "File type", "Device driver"], correct: 0, exp: "Shares resources with parent process." },
    { q: "38. Demand Paging loads pages:", a: ["When needed", "All at once", "Never", "On shutdown"], correct: 0, exp: "Lazy loading for efficiency." },
    { q: "39. Which is not an OS?", a: ["Oracle", "Windows", "Linux", "Android"], correct: 0, exp: "Oracle is a database." },
    { q: "40. What is Multithreading?", a: ["Multiple threads in a process", "Single thread only", "File threading", "Device multi"], correct: 0, exp: "Improves responsiveness." },
    { q: "41. BIOS stands for:", a: ["Basic Input Output System", "Binary Input System", "Boot Input OS", "Basic Internet OS"], correct: 0, exp: "Firmware for hardware init." },
    { q: "42. Which OS is single-user?", a: ["MS-DOS", "UNIX", "Linux Server", "Windows Server"], correct: 0, exp: "Designed for one user." },
    { q: "43. What is Context Switching?", a: ["Switching between processes", "File switch", "Memory swap", "Device change"], correct: 0, exp: "Saves/restores process state." },
    { q: "44. RAID is related to:", a: ["Disk management", "Process", "Memory", "Network"], correct: 0, exp: "Redundant Array of Disks." },
    { q: "45. What is Fork() in UNIX?", a: ["Create child process", "Delete process", "Pause process", "Resume process"], correct: 0, exp: "System call for process creation." },
    { q: "46. HFS+ is file system for:", a: ["macOS", "Windows", "Linux", "Android"], correct: 0, exp: "Apple's Hierarchical File System." },
    { q: "47. What is Preemptive Scheduling?", a: ["OS can interrupt process", "No interruption", "User interrupt", "File preemption"], correct: 0, exp: "Allows higher priority to take over." },
    { q: "48. Swap Space is:", a: ["Part of virtual memory on disk", "RAM only", "CPU cache", "Registry"], correct: 0, exp: "Used when RAM is full." },
    { q: "49. Which is Batch OS example?", a: ["Early mainframes", "Windows 10", "Android", "iOS"], correct: 0, exp: "Jobs processed in groups." },
    { q: "50. What is User Mode in OS?", a: ["Limited access execution", "Full access", "Kernel only", "Boot mode"], correct: 0, exp: "For running user applications safely." }
];

// Load Questions on Page Load
document.addEventListener('DOMContentLoaded', () => {
    const questionsDiv = document.getElementById('questions');
    questions.forEach((item, index) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'question';
        qDiv.innerHTML = `
            <h3>${item.q}</h3>
            <div class="options">
                ${item.a.map((opt, i) => `<label><input type="radio" name="q${index}" value="${i}"> ${opt}</label>`).join('')}
            </div>
        `;
        questionsDiv.appendChild(qDiv);
    });

    // Timer
    let timeLeft = 30 * 60; // 30 mins in seconds
    const timer = setInterval(() => {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        document.getElementById('time').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            document.getElementById('quizForm').style.display = 'none';
            showResults();
        }
    }, 1000);

    // Submit Handler
    document.getElementById('quizForm').addEventListener('submit', (e) => {
        e.preventDefault();
        clearInterval(timer);
        showResults();
    });
});

function showResults() {
    const form = document.getElementById('quizForm');
    const results = document.getElementById('results');
    const scoreEl = document.getElementById('score');
    const expEl = document.getElementById('explanations');

    form.classList.add('hidden');
    results.classList.remove('hidden');

    let score = 0;
    let explanations = '';

    questions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        const userAns = selected ? parseInt(selected.value) : -1;
        if (userAns === item.correct) score++;

        explanations += `
            <div class="question">
                <h3>${item.q}</h3>
                <p><strong>Correct: ${item.a[item.correct]}</strong></p>
                <p><em>Explanation: ${item.exp}</em></p>
                ${userAns === item.correct ? '<span style="color:green;">✓ Correct!</span>' : '<span style="color:red;">✗ Wrong</span>'}
            </div>
        `;
    });

    scoreEl.textContent = score;
    expEl.innerHTML = explanations;
}
