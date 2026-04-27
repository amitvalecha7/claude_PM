# Claude PM Skill — Project Manager AI Assistant

This repository contains a Claude Code skill that acts as a full-spectrum AI Project Manager, grounded in **PMBOK (all editions)**, with **PMBOK 8th Edition (Nov 2025 / Jan 2026)** as the primary current standard, plus the principle-based PMBOK 7th Edition and the process-based PMBOK 6th Edition for legacy and exam contexts.

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
  initiation/                   # Project Charter, Stakeholder Register, Business Case, Assumptions Log
  planning/                     # WBS, Schedule, Budget, Risk Register, Comm Plan, RACI, Quality, Resource, Stakeholder, Procurement
  executing/                    # Status Reports, Meeting Minutes, Change Requests, Action Items, Issue Log
  monitoring/                   # Performance Reports (EVM), Variance Analysis, Risk Monitoring, Change Log
  closing/                      # Lessons Learned, Final Report, Closure Certificate, Handover Checklist
  governance/                   # PMBOK 8: Governance Framework, Sustainability Plan, AI in PM Plan, Ethics & Responsible Tech
policies/
  change_control.md             # Change control policy
  escalation.md                 # Escalation policy
  quality_gates.md              # Quality gate criteria
  communication.md              # Communication policy
```

## PMBOK Coverage

### PMBOK 8th Edition (PRIMARY — released Nov 2025 / Jan 2026)
**6 Principles:** Holistic View · Focus on Value · Embed Quality · Accountable Leadership · Integrated Sustainability · Empowered Culture

**7 Performance Domains:** Governance · Stakeholders · Scope · Schedule · **Finance** *(new)* · Resources · Risk

**5 Focus Areas (replacing Process Groups):** Initiating · Planning · Executing · Monitoring & Controlling · Closing

**40 non-prescriptive processes** organized by performance domain, with new dedicated coverage of:
- AI in Project Management
- Sustainable Project Delivery (ESG / Triple Bottom Line)
- Ethical Technology Use
- Customer-Focused PMO
- Modern Procurement Practices

### PMBOK 7th Edition — 12 Principles (Legacy Reference)
Stewardship · Team · Stakeholders · Value · Systems Thinking · Leadership · Tailoring · Quality · Complexity · Risk · Adaptability · Change

### PMBOK 6th Edition — 5 Process Groups × 10 Knowledge Areas (Legacy Reference)
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

## Invoke

```
/pm
```
