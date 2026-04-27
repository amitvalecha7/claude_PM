# PM Pro — AI Project Manager Skill for Claude Code

**by Amit Valecha** · [GitHub](https://github.com/amitvalecha7/claude_PM)

> A production-ready Claude Code skill (`/pm`) that acts as a full-spectrum AI Project Manager — grounded in PMBOK 6, 7 & **8** (the current edition, released Nov 2025 / Jan 2026).

---

## What Is This?

**PM Pro** is a slash command skill for [Claude Code](https://claude.ai/code) that turns Claude into an expert Project Manager. Type `/pm` in any Claude Code session and get:

- Guided PM workflows for every phase (Initiating → Planning → Executing → Monitoring → Closing)
- Ready-to-use artifacts: Project Charter, WBS, Risk Register, Schedule, Budget, Status Reports, Change Requests, Lessons Learned — and more
- **Real Excel (.xlsx), PowerPoint (.pptx), and Word (.docx) files** generated and saved to your machine
- Full PMBOK 8 coverage: the 6 Principles, 7 Performance Domains, 5 Focus Areas, and 40 non-prescriptive processes
- Governance, Sustainability (ESG), AI in PM, and Ethical Tech plans (new in PMBOK 8)
- Enforced PM policies: change control, escalation, quality gates, communication

---

## Quick Install

### Option 1 — npm (recommended)

```bash
npx @amitvalecha7/claude-pm-skill
```

Or install globally so it persists:

```bash
npm install -g @amitvalecha7/claude-pm-skill
install-pm-skill --global
```

### Option 2 — Shell script (no Node.js needed)

```bash
git clone https://github.com/amitvalecha7/claude_PM.git
cd claude_PM
bash install.sh
```

### Option 3 — Manual (30 seconds)

Copy the skill file to your Claude commands directory:

```bash
# Global (works in every project)
mkdir -p ~/.claude/commands
cp .claude/commands/pm.md ~/.claude/commands/pm.md

# Project-only
mkdir -p .claude/commands
cp .claude/commands/pm.md ./.claude/commands/pm.md
```

---

## Usage

1. Open Claude Code (`claude` in your terminal, or the VS Code / JetBrains extension)
2. Type `/pm` and press Enter
3. Tell Claude PM what you need, for example:

```
/pm I need to start a new software project called "Customer Portal 2026"
```

```
/pm Generate a risk register for a $2M cloud migration project
```

```
/pm Create a Steering Committee PowerPoint for this week's status — we are 2 days behind and on budget
```

```
/pm We have a change request to add a new module. Initiate change control.
```

---

## What PM Pro Can Do

### PM Artifacts (Markdown + Excel + PowerPoint + Word)

| Phase | Artifacts |
|---|---|
| **Initiating** | Project Charter, Business Case, Stakeholder Register, Assumptions Log |
| **Planning** | WBS, Schedule, Budget/Cost Baseline, Risk Register, Comm. Plan, RACI, Quality Plan, Resource Plan, Procurement Plan, Stakeholder Engagement Plan |
| **Executing** | Status Reports, Meeting Minutes, Action Items, Change Requests, Issue Log |
| **Monitoring & Controlling** | EVM Performance Report, Variance Analysis, Risk Monitoring, Change Log |
| **Closing** | Lessons Learned, Final Report, Closure Certificate, Handover Checklist |
| **Governance (PMBOK 8 NEW)** | Governance Framework, Sustainability Plan (ESG), AI in PM Plan, Ethics & Responsible Tech Plan |

### Document Formats

| Format | How to Request | Library Used |
|---|---|---|
| Markdown (default) | Default for all output | Built-in |
| Excel `.xlsx` | "...as an Excel file" | `openpyxl` / `xlsxwriter` |
| PowerPoint `.pptx` | "...as a PowerPoint" | `python-pptx` |
| Word `.docx` | "...as a Word document" | `python-docx` |
| CSV | "...as CSV" | Built-in |

### PMBOK Coverage

| Edition | Type | Key Framework |
|---|---|---|
| **PMBOK 8** (PRIMARY) | Principle + Process | 6 Principles, 7 Domains, 5 Focus Areas, 40 Processes |
| PMBOK 7 | Principle-based | 12 Principles, 8 Performance Domains |
| PMBOK 6 | Process-based | 5 Process Groups, 10 Knowledge Areas, 49 Processes |

### PMBOK 8 Principles Applied

1. Adopt a Holistic View
2. Focus on Value
3. Embed Quality Into Processes and Deliverables
4. Be an Accountable Leader
5. Integrate Sustainability Within All Project Areas
6. Build an Empowered Culture

### PMBOK 8 Performance Domains

`Governance` · `Stakeholders` · `Scope` · `Schedule` · `Finance` *(new)* · `Resources` · `Risk`

---

## Tools & Requirements

| Tool | Required? | Purpose |
|---|---|---|
| [Claude Code](https://claude.ai/code) | **Required** | Runs the `/pm` skill |
| Python 3.8+ | Required for Excel/PPT/Word | Code execution for file generation |
| `openpyxl` | For `.xlsx` output | `pip install openpyxl` |
| `python-pptx` | For `.pptx` output | `pip install python-pptx` |
| `python-docx` | For `.docx` output | `pip install python-docx` |
| `pandas` + `xlsxwriter` | For advanced Excel/charts | `pip install pandas xlsxwriter` |
| Node.js 18+ | npm installer only | Optional — only for npm install method |

**One-time setup for document generation:**

```bash
pip install openpyxl python-pptx python-docx pandas xlsxwriter
```

---

## Repository Structure

```
.claude/
  commands/
    pm.md                    ← The skill (this is what Claude Code reads)
templates/
  initiation/                ← Project Charter, Business Case, Stakeholder Register, Assumptions Log
  planning/                  ← WBS, Schedule, Budget, Risk Register, Comm Plan, RACI, Resource, Procurement
  executing/                 ← Status Reports, Meeting Minutes, Change Requests, Action Items, Issue Log
  monitoring/                ← Performance Reports (EVM), Variance Analysis, Risk Monitoring, Change Log
  closing/                   ← Lessons Learned, Final Report, Closure Certificate, Handover Checklist
  governance/                ← Governance Framework, Sustainability Plan, AI in PM Plan, Ethics Plan
policies/
  change_control.md          ← Change control thresholds and CCB process
  escalation.md              ← Escalation levels, SLAs, and triggers
  quality_gates.md           ← Gate 0–4 criteria and decisions
  communication.md           ← Communication standards and cadence
docs/
  installation_and_usage_guide.md  ← Full installation + usage training document
bin/
  install-pm-skill.js        ← npm installer script
install.sh                   ← Shell installer script
package.json                 ← npm package configuration
README.md                    ← This file
```

---

## Example Conversations

```
/pm Start a new project — B2B SaaS platform, 6 months, $800K budget, 
    hybrid delivery. Generate the Project Charter.
```

```
/pm Create a risk register as Excel for a data migration project.
    We have 3 key risks: data loss, timeline slippage, vendor delays.
```

```
/pm We need a Steering Committee deck for tomorrow. 
    Status: on schedule, $12K over budget, 1 critical risk escalated.
    Make it a PowerPoint.
```

```
/pm Scope creep! A stakeholder is asking for a mobile app 
    that was not in scope. Initiate change control.
```

```
/pm Run an EVM analysis. BAC=$500K, PV=$200K, EV=$180K, AC=$210K.
    What is our SPI, CPI and forecast to complete?
```

```
/pm Close the project. Generate all closing artifacts.
```

---

## Policies Enforced

PM Pro automatically applies these policies when relevant:

- **Change Control** — All scope/schedule/cost changes go through formal CCB review
- **Escalation** — 4-level escalation matrix with defined SLAs
- **Quality Gates** — Gate 0 (Authorization) through Gate 4 (Closure) with pass/fail criteria
- **Communication** — Stakeholder-appropriate reporting cadence and formats

---

## License

MIT © Amit Valecha

---

*Grounded in PMI PMBOK Guide 6th, 7th & 8th Editions · Powered by Claude Code (Anthropic)*
