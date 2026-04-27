# Project Schedule
**PMBOK Process:** 6.5 Develop Schedule | Knowledge Area: Schedule Management | Process Group: Planning

---

## Project Information

| Field | Value |
|---|---|
| **Project Name** | [Project Name] |
| **Project ID** | [PRJ-YYYY-NNN] |
| **Start Date** | [YYYY-MM-DD] |
| **Baseline End Date** | [YYYY-MM-DD] |
| **Prepared By** | [PM Name] |
| **Version** | 1.0 |

---

## Activity List

| Activity ID | WBS ID | Activity Name | Predecessors | Duration (days) | Resource | Early Start | Early Finish | Late Start | Late Finish | Float |
|---|---|---|---|---|---|---|---|---|---|---|
| A | 1.1.1 | Project Initiation | — | 5 | PM | | | | | |
| B | 1.1.2 | Project Planning | A | 10 | PM | | | | | |
| C | 1.2.1 | [Activity] | B | [N] | [Name] | | | | | |
| D | 1.2.2 | [Activity] | C | [N] | [Name] | | | | | |
| E | 1.3.1 | [Activity] | C | [N] | [Name] | | | | | |
| F | 1.4.1 | [Activity] | D,E | [N] | [Name] | | | | | |
| G | 1.5.1 | Project Closure | F | 5 | PM | | | | | |

---

## Critical Path Analysis

**Critical Path:** A → B → C → D → F → G

**Critical Path Duration:** [N] days

| Path | Activities | Duration | Critical? |
|---|---|---|---|
| Path 1 | A→B→C→D→F→G | [N] days | **Yes** |
| Path 2 | A→B→C→E→F→G | [N] days | No (Float: [N] days) |

---

## Three-Point Estimates (PERT)

| Activity | Optimistic (O) | Most Likely (M) | Pessimistic (P) | PERT Estimate = (O+4M+P)/6 | Std Dev = (P-O)/6 |
|---|---|---|---|---|---|
| C | | | | | |
| D | | | | | |
| E | | | | | |

**Project PERT Duration:** [Sum of critical path PERT estimates] days
**Standard Deviation:** [√(sum of variances on critical path)] days
**90% Confidence Interval:** PERT ± 1.28σ

---

## Milestone Schedule

| # | Milestone | Baseline Date | Actual/Forecast Date | Status | Notes |
|---|---|---|---|---|---|
| M1 | Project Kick-off | [Date] | | Not Started | |
| M2 | Requirements Complete | [Date] | | | |
| M3 | Design Complete | [Date] | | | |
| M4 | Build Complete | [Date] | | | |
| M5 | Testing Complete | [Date] | | | |
| M6 | Go-Live / Delivery | [Date] | | | |
| M7 | Project Close | [Date] | | | |

**Status:** Not Started · In Progress · Complete · At Risk · Delayed

---

## Schedule Compression Options

| Technique | Applicable Activities | Additional Cost | Risk | Days Saved |
|---|---|---|---|---|
| **Crashing** (add resources) | [Activity] | $ | Medium | [N] |
| **Fast-Tracking** (parallelize) | [Activity A] ‖ [Activity B] | $0 | High | [N] |

---

## Resource Calendar

| Resource | Role | Availability | Assignments | Conflicts |
|---|---|---|---|---|
| [Name] | [Role] | 100% | C, D | None |
| [Name] | [Role] | 50% | E | Shared with project X |

---

## Schedule Baseline Approval

| Role | Name | Signature | Date |
|---|---|---|---|
| Project Manager | | | |
| Project Sponsor | | | |

---

*Template Reference: PMBOK 6th Ed. Sections 6.1–6.6 | CPM, PERT, Schedule Compression*
*Tools: Microsoft Project / Smartsheet / Jira / equivalent PMIS*
