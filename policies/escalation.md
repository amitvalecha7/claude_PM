# Escalation Policy
**PMBOK Reference:** 4.5 Monitor and Control Project Work | Knowledge Area: Integration Management

---

## Purpose

This policy defines when, how, and to whom project issues, risks, and variances must be escalated. Timely escalation prevents small problems from becoming critical failures.

---

## Escalation Triggers

### Automatic Escalation (PM escalates immediately, no discretion)

| Trigger | Threshold | Escalate To |
|---|---|---|
| Schedule Variance (SV) | < −10% of PV | Project Sponsor |
| Cost Variance (CV) | < −10% of EV | Project Sponsor + Finance |
| SPI | < 0.85 for 2 consecutive periods | Project Sponsor |
| CPI | < 0.85 for 2 consecutive periods | Project Sponsor + Finance |
| Unresolved blocker | > 2 business days | Project Sponsor |
| Critical risk triggered | Any High/Critical risk materialized | Project Sponsor |
| Quality gate failed | Any phase gate failure | Project Sponsor + QA |
| Legal / compliance issue | Any time | Legal + Sponsor immediately |
| Data breach / security incident | Any time | CISO + Sponsor immediately |
| Stakeholder conflict (unresolvable at PM level) | After 3 attempts | Project Sponsor |
| Scope change > PM authority | Per change control thresholds | CCB / Sponsor |

### Discretionary Escalation (PM judgment)

| Trigger | Recommended Threshold |
|---|---|
| Team morale or conflict | Ongoing friction affecting delivery |
| Resource unavailability | Key resource unavailable > 3 days |
| Vendor performance | SLA breach or delivery failure |
| Stakeholder disengagement | Key stakeholder unresponsive > 48h |
| Technical risk emerging | New high-impact technical uncertainty |

---

## Escalation Levels

```
Level 1: Project Manager
    └─ Handles day-to-day issues, team conflicts, minor variances
    └─ SLA: Resolve within 24 hours
    
Level 2: Project Sponsor
    └─ Receives: Significant variances, unresolved blockers, critical risks
    └─ SLA: Respond within 24 hours; resolve within 3 business days
    └─ Authority: Budget changes, scope decisions, resource allocation

Level 3: Steering Committee / Executive Leadership
    └─ Receives: Issues unresolved at Sponsor level, strategic risks, 
                 project continuation decisions
    └─ SLA: Respond within 48 hours; convene within 1 week
    └─ Authority: Project continuation/termination, major scope resets

Level 4: Organizational Leadership / Board
    └─ Receives: Mission-critical impacts, regulatory failures, 
                 major financial exposures
    └─ Trigger: Only when Steering Committee cannot resolve
```

---

## Escalation Process

```
Step 1: PM documents the issue clearly:
    - What is the issue?
    - What is the impact? (scope / schedule / cost / quality / risk)
    - What has been tried?
    - What decision or action is needed from the escalation target?
    ↓
Step 2: PM escalates via email (formal) + phone/message (urgent)
    - Email subject: [ESCALATION] [Project Name] - [Issue Summary]
    ↓
Step 3: Escalation target acknowledges within SLA
    ↓
Step 4: PM tracks resolution in Issue Log
    ↓
Step 5: If unresolved within SLA, PM escalates to next level
    ↓
Step 6: Issue resolved → PM closes in Issue Log and communicates outcome
```

---

## Escalation Communication Template

```
Subject: [ESCALATION] [Project Name] — [Issue/Risk Description] — Action Required by [Date]

Escalation Level: [Level 1/2/3]
Priority: Critical / High

Issue: [Clear description of the problem]

Impact: 
- Schedule: [Impact]
- Cost: [Impact]
- Scope/Quality: [Impact]

Actions Already Taken:
- [Action 1 taken by PM]
- [Action 2 tried]

Decision/Action Required:
- [Specific ask — what do you need from the escalation target?]

Decision Needed By: [Date/Time]

Supporting Documents: [Attach: Issue Log, Risk Register, Status Report]

Project Manager: [Name] | [Phone] | [Email]
```

---

## Escalation SLAs

| Priority | Acknowledge | Respond | Resolve |
|---|---|---|---|
| **Critical** | 1 hour | 4 hours | 24 hours |
| **High** | 4 hours | 24 hours | 3 business days |
| **Medium** | 24 hours | 48 hours | 5 business days |
| **Low** | 48 hours | 72 hours | Next reporting period |

---

## De-escalation

When an escalated issue is resolved:
1. PM updates the Issue Log (status = Resolved/Closed)
2. PM notifies all parties who were informed of the escalation
3. PM documents the resolution and lessons learned
4. If the escalation revealed a systemic issue, PM creates a process improvement recommendation

---

*Policy Owner: Project Manager | Reviewed: Monthly or at each phase gate*
*Reference: PMBOK 6th Ed. Sections 4.5, 11.7 | PMBOK 7th Ed. Principle: Risk, Adaptability*
