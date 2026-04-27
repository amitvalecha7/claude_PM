# PM Pro — Installation & Usage Guide
**Training Document** | by Amit Valecha

---

## Table of Contents

1. [What Is PM Pro?](#1-what-is-pm-pro)
2. [Prerequisites](#2-prerequisites)
3. [Installation Methods](#3-installation-methods)
4. [Verifying the Installation](#4-verifying-the-installation)
5. [How to Use the /pm Skill](#5-how-to-use-the-pm-skill)
6. [Generating Excel, PowerPoint & Word Files](#6-generating-excel-powerpoint--word-files)
7. [Available Artifacts Reference](#7-available-artifacts-reference)
8. [PMBOK 8 Quick Reference](#8-pmbok-8-quick-reference)
9. [Policies PM Pro Enforces](#9-policies-pm-pro-enforces)
10. [Troubleshooting](#10-troubleshooting)
11. [Updating the Skill](#11-updating-the-skill)
12. [Uninstalling](#12-uninstalling)

---

## 1. What Is PM Pro?

**PM Pro** is a Claude Code *skill* — a custom slash command (`/pm`) that transforms Claude into a full-spectrum AI Project Manager. Once installed, you type `/pm` inside any Claude Code session and Claude immediately operates as an expert PM, producing artifacts, enforcing policies, and guiding you through every PMBOK process.

### What makes it different from just asking Claude about PM?

| Asking Claude directly | Using `/pm` |
|---|---|
| Generic answer | Follows PMBOK 6/7/8 precisely |
| No templates | Fills in your specific templates |
| No policies | Enforces change control, escalation, quality gates |
| Markdown only | Generates real Excel, PowerPoint, Word files |
| No context tracking | Tracks project state across the session |
| No follow-ups | Proactively schedules and tracks action items |

---

## 2. Prerequisites

### Required

| Requirement | Version | How to Check | Install |
|---|---|---|---|
| **Claude Code** | Latest | `claude --version` | https://claude.ai/code |
| **Claude Code account** | Pro or Team plan | claude.ai | — |

### Required for Excel / PowerPoint / Word output

| Requirement | Version | How to Check | Install |
|---|---|---|---|
| **Python** | 3.8 or higher | `python3 --version` | https://python.org |
| **openpyxl** | Any recent | `pip show openpyxl` | `pip install openpyxl` |
| **python-pptx** | Any recent | `pip show python-pptx` | `pip install python-pptx` |
| **python-docx** | Any recent | `pip show python-docx` | `pip install python-docx` |
| **pandas** | Any recent | `pip show pandas` | `pip install pandas` |
| **xlsxwriter** | Any recent | `pip show xlsxwriter` | `pip install xlsxwriter` |

**Install everything at once:**

```bash
pip install openpyxl python-pptx python-docx pandas xlsxwriter
```

### Optional (for npm installation method only)

| Requirement | Version | Install |
|---|---|---|
| Node.js | 18+ | https://nodejs.org |
| npm | 9+ | Bundled with Node.js |

### What PM Pro does NOT require

- No external API keys (it runs inside Claude Code)
- No database
- No server or cloud subscription beyond your Claude Code plan
- No Docker

---

## 3. Installation Methods

### Method A — npm (Recommended if you have Node.js)

This is the standard "npm-style" installation. It installs the skill globally so `/pm` is available in every Claude Code session on your machine.

**Step 1: Install the package globally**

```bash
npm install -g @amitvalecha7/claude-pm-skill
```

**Step 2: Run the installer**

```bash
install-pm-skill --global
```

This copies:
- The `/pm` skill → `~/.claude/commands/pm.md`
- Templates → `~/.claude/pm-templates/`
- Policies → `~/.claude/pm-policies/`

**Step 3: Install Python dependencies (for file generation)**

```bash
pip install openpyxl python-pptx python-docx pandas xlsxwriter
```

**Done.** Open Claude Code in any directory and type `/pm`.

---

### Method B — npx (No install, run once)

If you don't want to install globally:

```bash
npx @amitvalecha7/claude-pm-skill
```

This runs the installer without permanently installing the npm package.

---

### Method C — Shell script (No Node.js needed)

**Step 1: Clone the repository**

```bash
git clone https://github.com/amitvalecha7/claude_PM.git
cd claude_PM
```

**Step 2: Run the installer**

```bash
bash install.sh
```

Or for project-only installation (only available in this one project):

```bash
bash install.sh --project
```

**Step 3: Install Python dependencies**

```bash
pip install openpyxl python-pptx python-docx pandas xlsxwriter
```

---

### Method D — Manual copy (Quickest, no tools needed)

**Global (available in all projects):**

```bash
mkdir -p ~/.claude/commands
curl -o ~/.claude/commands/pm.md \
  https://raw.githubusercontent.com/amitvalecha7/claude_PM/main/.claude/commands/pm.md
```

**Project-only:**

```bash
mkdir -p .claude/commands
curl -o .claude/commands/pm.md \
  https://raw.githubusercontent.com/amitvalecha7/claude_PM/main/.claude/commands/pm.md
```

---

### Method E — Clone and use in place

If you want the full repository with all templates and policies:

```bash
git clone https://github.com/amitvalecha7/claude_PM.git
cd claude_PM
claude   # Open Claude Code in this directory — /pm is already available
```

The `.claude/commands/pm.md` is automatically picked up because Claude Code scans the current project's `.claude/commands/` folder.

---

### Installation Location Summary

| Install Type | Location of pm.md | Available In |
|---|---|---|
| Global | `~/.claude/commands/pm.md` | All projects, all sessions |
| Project | `./.claude/commands/pm.md` | This project only |
| In-place (cloned repo) | `./claude_PM/.claude/commands/pm.md` | When in that directory |

---

## 4. Verifying the Installation

1. Open a terminal and run:
   ```bash
   claude
   ```

2. In the Claude Code prompt, type:
   ```
   /pm
   ```

3. You should see PM Pro respond with a greeting and ask what you'd like to work on.

4. Test document generation:
   ```
   /pm Generate a simple risk register as Excel with 3 sample risks
   ```
   If Python libraries are installed, Claude Code will generate and save a `.xlsx` file.

**Troubleshooting:** If `/pm` is not found, see [Section 10 — Troubleshooting](#10-troubleshooting).

---

## 5. How to Use the /pm Skill

### Starting a Session

Just type `/pm` followed by your request in one message:

```
/pm I'm starting a new ERP implementation project. $2M budget, 18 months, 
    hybrid delivery. Help me get started.
```

Or type `/pm` alone to get the interactive menu.

### Phrase Patterns That Trigger Specific Behaviors

| What You Say | What PM Pro Does |
|---|---|
| "start a new project" / "initiating" | Full project initiation: charter, stakeholder register, assumptions log |
| "plan the project" / "planning" | Full planning set: WBS, schedule, budget, risk register, all plans |
| "generate [artifact name]" | Produces that specific artifact filled with your project data |
| "status report" / "weekly update" | Generates formatted status report (RAG, milestones, risks, actions) |
| "change request" / "scope change" | Triggers change control policy; generates CR form; routes to CCB |
| "risk register" / "risk assessment" | Full risk register with probability/impact matrix and responses |
| "EVM analysis" / "earned value" | Calculates SPI, CPI, EAC, ETC; flags variances; recommends actions |
| "close the project" | All closing artifacts: lessons learned, final report, closure cert |
| "escalate" | Applies escalation policy; routes to correct level with SLA |
| "as Excel" / "Excel file" | Generates Python code and creates `.xlsx` in current directory |
| "as PowerPoint" / "slide deck" | Generates Python code and creates `.pptx` in current directory |
| "as Word" / "Word document" | Generates Python code and creates `.docx` in current directory |
| "sustainability" / "ESG" | Fills out Sustainability Plan template (PMBOK 8) |
| "AI governance" / "AI plan" | Fills out AI in PM Plan template (PMBOK 8) |
| "governance framework" | Fills out Governance Framework template (PMBOK 8) |

### Example Conversations

#### Starting a New Project

```
/pm New project: "Retail Analytics Platform"
    Sponsor: Jane Smith (CTO)
    Budget: $1.2M over 12 months
    Team: 8 people, hybrid delivery (sprints + milestone gates)
    Key stakeholders: Finance, Marketing, IT
    
    Please initiate the project — start with the charter.
```

PM Pro will generate a filled-in Project Charter, then ask if you want the Stakeholder Register next.

#### Weekly Status Report

```
/pm Generate this week's status report.
    Project: Retail Analytics Platform
    Week 14 of 52 | Budget: $180K spent of $1.2M
    Milestones: Database migration complete ✓, API development 60% done
    Schedule: 3 days behind plan
    Risks: 2 new risks (vendor delay, resource gap)
    Actions: 5 open items from last week
```

#### EVM Analysis

```
/pm Run EVM analysis:
    BAC = $500,000
    PV  = $200,000
    EV  = $185,000
    AC  = $215,000
```

PM Pro will calculate SPI, CPI, SV, CV, EAC, ETC, TCPI; interpret them; flag the variance; and recommend corrective action.

#### Creating a PowerPoint

```
/pm Create a Steering Committee PowerPoint for our April 2026 meeting.
    Project: Retail Analytics Platform
    Overall status: AMBER
    Schedule: 1 week behind
    Budget: On track ($2K underspend)
    Top risk: Vendor delay on API integration (HIGH)
    Decision needed: Approve 1-week extension
    
    Save it as steering_april_2026.pptx
```

---

## 6. Generating Excel, PowerPoint & Word Files

### How It Works

PM Pro uses Python libraries (`openpyxl`, `python-pptx`, `python-docx`) to generate files. When you ask for a file:

1. PM Pro writes Python code
2. Claude Code executes the code in your terminal (you may be prompted to allow code execution)
3. The file is saved in your current working directory
4. PM Pro confirms the filename and location

**Allow code execution:** The first time, Claude Code may ask permission to run Python. Click **Allow** or configure auto-allow in `.claude/settings.json`.

### Excel Examples

```
/pm Generate a risk register as Excel. Here are 5 risks:
    1. Scope creep - HIGH probability, HIGH impact
    2. Key developer leaves - MEDIUM probability, HIGH impact
    3. Budget overrun - MEDIUM probability, MEDIUM impact
    4. Vendor delay - HIGH probability, MEDIUM impact
    5. Data migration failure - LOW probability, HIGH impact
    
    Output: risk_register.xlsx
```

```
/pm Create an EVM dashboard in Excel.
    BAC=$800K, 6 months data:
    Month 1: PV=50K, EV=48K, AC=52K
    Month 2: PV=110K, EV=105K, AC=115K
    Month 3: PV=180K, EV=170K, AC=190K
    
    Include SPI, CPI, S-curve chart data.
    Output: evm_dashboard.xlsx
```

### PowerPoint Examples

```
/pm Create a project kickoff deck for "Cloud Migration 2026".
    10 slides. Include: Agenda, Why we're doing this, Scope, 
    Timeline (Gantt), Team, Governance, Risks, Budget, 
    Success criteria, Next steps.
    
    Output: kickoff_cloud_migration.pptx
```

```
/pm Generate a monthly status report PowerPoint.
    5 slides: Dashboard RAG, Milestone progress, 
    Budget/EVM, Top 5 risks, Action items.
    
    Output: status_report_april_2026.pptx
```

### Word Examples

```
/pm Export the Project Charter as a Word document.
    Output: project_charter.docx
```

---

## 7. Available Artifacts Reference

### Initiation Artifacts
- `project_charter.md` — Project authorization, objectives, scope, budget, team
- `business_case.md` — ROI, options analysis, recommendation
- `stakeholder_register.md` — All stakeholders, interest, influence, engagement plan
- `assumptions_log.md` — Assumptions and constraints

### Planning Artifacts
- `wbs.md` — Work Breakdown Structure (hierarchical)
- `schedule.md` — Milestone plan, critical path, Gantt data
- `budget.md` — Cost baseline by phase, contingency, management reserve
- `risk_register.md` — Risks, probability, impact, scores, responses
- `communication_plan.md` — Who gets what, how often, in what format
- `raci_matrix.md` — Roles and responsibilities grid
- `quality_plan.md` — Quality standards, metrics, audits
- `resource_plan.md` — Team, roles, capacity, hiring needs
- `procurement_plan.md` — Vendor strategy, RFP process, contracts
- `stakeholder_engagement_plan.md` — Engagement strategies by stakeholder

### Executing Artifacts
- `status_report.md` — Weekly/monthly RAG status update
- `meeting_minutes.md` — Meeting record with decisions and actions
- `change_request.md` — Formal CR with impact analysis
- `action_items.md` — Action tracker with owner and due date
- `issue_log.md` — Issue register with severity and resolution

### Monitoring & Controlling Artifacts
- `performance_report.md` — EVM dashboard: SPI, CPI, EAC, ETC
- `variance_analysis.md` — Schedule and cost variance analysis
- `risk_monitoring_report.md` — Risk status updates
- `change_log.md` — All changes: requested, approved, rejected

### Closing Artifacts
- `lessons_learned.md` — What worked, what didn't, recommendations
- `final_report.md` — Project summary, KPI actuals vs. targets, benefits
- `closure_certificate.md` — Formal acceptance and closure sign-off
- `handover_checklist.md` — Knowledge transfer and handover checklist

### Governance Artifacts (PMBOK 8 New)
- `governance_framework.md` — Decision authority, ethics, audit plan
- `sustainability_plan.md` — ESG: People, Planet, Profit
- `ai_in_pm_plan.md` — AI tools policy, HITL, bias monitoring
- `ethics_and_responsible_tech.md` — Privacy, accessibility, fairness

---

## 8. PMBOK 8 Quick Reference

### 6 Principles
1. **Adopt a Holistic View** — Treat the project as a system; consider all impacts
2. **Focus on Value** — Optimize for outcomes and business value, not just outputs
3. **Embed Quality** — Quality is built in from the start, not tested at the end
4. **Be an Accountable Leader** — Own outcomes; model integrity and transparency
5. **Integrate Sustainability** — Embed ESG into scope, design, procurement, delivery
6. **Build an Empowered Culture** — Psychological safety; autonomous, self-organizing teams

### 7 Performance Domains
| Domain | What PM Pro Does |
|---|---|
| **Governance** | Decision rights, ethics, oversight, compliance |
| **Stakeholders** | Identification, engagement, expectation management |
| **Scope** | Deliverables, WBS, acceptance criteria |
| **Schedule** | Critical path, milestones, sequence |
| **Finance** | Budget, EVM, benefits realization, economic sustainability |
| **Resources** | Team, vendors, materials, capacity |
| **Risk** | Threats, opportunities, responses, monitoring |

### 5 Focus Areas (= Process Groups)
`Initiating` → `Planning` → `Executing` → `Monitoring & Controlling` → `Closing`

---

## 9. Policies PM Pro Enforces

PM Pro will automatically apply these policies when relevant:

### Change Control (`policies/change_control.md`)
- All scope, schedule, or cost changes require a formal Change Request (CR)
- CRs are assessed for impact, then routed by magnitude:
  - Small changes → PM authority
  - Medium changes → Sponsor approval
  - Large/cross-functional → Change Control Board (CCB)
- Emergency fast-track process available for urgent issues

### Escalation (`policies/escalation.md`)
- Level 1: PM resolves (24h SLA)
- Level 2: Sponsor (3-day SLA)
- Level 3: Steering Committee (1-week SLA)
- Level 4: Executive Leadership
- PM Pro will tell you when an issue needs escalating and draft the escalation message

### Quality Gates (`policies/quality_gates.md`)
- Gate 0: Authorization (end of Initiation)
- Gate 1: Planning complete (before Execution)
- Gate 2: Mid-project (30–50%)
- Gate 3: Test/UAT complete
- Gate 4: Closure acceptance
- PM Pro will check gate criteria and flag any blockers

### Communication (`policies/communication.md`)
- Defines who receives which reports and how often
- PM Pro formats each artifact for the right audience (executive summary vs. working team detail)

---

## 10. Troubleshooting

### `/pm` is not recognized

**Cause:** The skill file is not in the right location.

**Fix:**
```bash
ls ~/.claude/commands/pm.md     # Should exist for global install
ls .claude/commands/pm.md       # Should exist for project install
```

If missing, re-run the installer:
```bash
bash install.sh        # Shell method
install-pm-skill       # npm method
```

### Excel/PowerPoint/Word file not generated

**Cause:** Python or the required library is missing.

**Fix:**
```bash
python3 --version                                    # Confirm Python is installed
pip install openpyxl python-pptx python-docx pandas xlsxwriter
```

Then retry the request.

### Claude Code says "permission denied" when running Python

**Cause:** Claude Code is in restricted permission mode.

**Fix:** When prompted by Claude Code to execute code, click **Allow**. Or add Python execution to your `.claude/settings.json`:

```json
{
  "permissions": {
    "allow": ["Bash(python3:*)", "Bash(pip:*)"]
  }
}
```

### Skill is outdated

**Fix:** Update to the latest version:
```bash
cd claude_PM && git pull && bash install.sh
```
Or:
```bash
npm update -g @amitvalecha7/claude-pm-skill && install-pm-skill --global
```

### Artifacts don't match my project

**Tip:** Always give PM Pro your project-specific details up front:
- Project name and ID
- Budget and timeline
- Team size and composition
- Delivery approach (waterfall/agile/hybrid)
- Sponsor and key stakeholders

The more context you provide, the more tailored the output.

---

## 11. Updating the Skill

### npm users

```bash
npm update -g @amitvalecha7/claude-pm-skill
install-pm-skill --global
```

### Git / shell users

```bash
cd claude_PM
git pull origin main
bash install.sh
```

### Manual update

Re-download the skill file:

```bash
curl -o ~/.claude/commands/pm.md \
  https://raw.githubusercontent.com/amitvalecha7/claude_PM/main/.claude/commands/pm.md
```

---

## 12. Uninstalling

### npm

```bash
install-pm-skill --uninstall
npm uninstall -g @amitvalecha7/claude-pm-skill
```

### Shell / manual

```bash
rm ~/.claude/commands/pm.md
```

---

## Support & Feedback

- **GitHub Issues:** https://github.com/amitvalecha7/claude_PM/issues
- **Maintainer:** Amit Valecha

---

*PM Pro is grounded in PMI PMBOK Guide 6th, 7th & 8th Editions.*
*Powered by Claude Code (Anthropic). Created by Amit Valecha.*
