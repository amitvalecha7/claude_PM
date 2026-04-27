# Claude PM Skill — Project Manager AI Assistant

This repository contains a Claude Code skill that acts as a full-spectrum AI Project Manager, grounded in **PMBOK (all editions)**, including the process-based PMBOK 6th Edition and the principle-based PMBOK 7th Edition.

## What This Skill Does

When invoked via `/pm`, Claude assumes the role of an expert Project Manager and:

- Guides users through any **PMBOK process group** (Initiating → Planning → Executing → Monitoring & Controlling → Closing)
- Produces **ready-to-use PM artifacts** (charters, WBS, schedules, risk registers, status reports, etc.)
- Applies **PMBOK tools & techniques** (decomposition, critical path, earned value, risk matrices, etc.)
- Enforces **PM policies and procedures** (change control, escalation, quality gates)
- Schedules and tracks **follow-ups and action items**
- Supports both **predictive (waterfall)** and **adaptive (agile/hybrid)** delivery approaches

## Repository Structure

```
.claude/commands/pm.md          # The PM skill (slash command)
templates/
  initiation/                   # Project Charter, Stakeholder Register, etc.
  planning/                     # WBS, Schedule, Risk Register, Communication Plan, etc.
  executing/                    # Meeting Minutes, Status Reports, Change Requests, etc.
  monitoring/                   # Performance Reports, Issue Log, Variance Analysis, etc.
  closing/                      # Lessons Learned, Final Report, Closure Certificate, etc.
policies/
  change_control.md             # Change control policy
  escalation.md                 # Escalation policy
  quality_gates.md              # Quality gate criteria
  communication.md              # Communication policy
```

## PMBOK Coverage

### PMBOK 6th Edition — 5 Process Groups × 10 Knowledge Areas
| Knowledge Area | Initiating | Planning | Executing | M&C | Closing |
|---|---|---|---|---|---|
| Integration | Project Charter | Project Mgmt Plan | Direct & Manage Work | Monitor & Control | Close Project |
| Scope | — | Scope Plan / WBS | Validate Scope | Control Scope | — |
| Schedule | — | Schedule Plan / CPM | — | Control Schedule | — |
| Cost | — | Cost Plan / Budget | — | Control Costs / EVM | — |
| Quality | — | Quality Plan | Manage Quality | Control Quality | — |
| Resource | — | Resource Plan | Acquire / Develop Team | Control Resources | — |
| Communications | — | Comm. Plan | Manage Comm. | Monitor Comm. | — |
| Risk | — | Risk Plan / Register | Implement Risk Resp. | Monitor Risks | — |
| Procurement | — | Procurement Plan | Conduct Procurements | Control Proc. | Close Proc. |
| Stakeholder | Identify Stakeholders | Stakeholder Eng. Plan | Manage Engagement | Monitor Eng. | — |

### PMBOK 7th Edition — 12 Principles
Stewardship · Team · Stakeholders · Value · Systems Thinking · Leadership · Tailoring · Quality · Complexity · Risk · Adaptability · Change

## Invoke

```
/pm
```
