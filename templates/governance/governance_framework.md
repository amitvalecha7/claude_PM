# Project Governance Framework
**PMBOK 8 Performance Domain:** Governance | Edition: PMBOK 8th (Nov 2025)

> Governance is the system of decision rights, accountability, oversight, and ethics that guides project behavior. It defines **who decides what, by when, and on what authority**.

---

## 1. Project Information

| Field | Value |
|---|---|
| **Project Name** | [Project Name] |
| **Project ID** | [PRJ-YYYY-NNN] |
| **Prepared By** | [PM Name] |
| **Date** | [YYYY-MM-DD] |
| **Version** | 1.0 |

---

## 2. Governance Bodies

| Body | Members | Purpose | Meeting Cadence | Quorum |
|---|---|---|---|---|
| **Project Sponsor** | [Name, Title] | Strategic oversight; final accountability; budget authority | Weekly 1:1 with PM | N/A |
| **Steering Committee** | Sponsor + 3–5 senior stakeholders | Strategic decisions; cross-functional alignment; major change approval | Monthly | ≥ 3 incl. Sponsor |
| **Change Control Board (CCB)** | Sponsor, PM, Customer rep, Tech Lead, Finance rep | Approve/reject baseline changes | As needed (within 5 business days of CR) | ≥ 3 incl. Sponsor |
| **Risk Review Board** | PM, Risk Owner, SMEs | Review high/critical risks | Bi-weekly | ≥ 3 |
| **Project Team** | PM + delivery team | Day-to-day execution | Daily standup / weekly | All |
| **PMO** | PMO Director + analysts | Process compliance, metrics, knowledge management | Monthly check-in | N/A |

---

## 3. Decision Authority Matrix (RACI for Decisions)

| Decision Type | PM | Sponsor | Steering | CCB | PMO |
|---|---|---|---|---|---|
| Day-to-day execution | **A/R** | I | — | — | I |
| Schedule change ≤ 5 days | **A/R** | I | — | — | — |
| Schedule change > 5 days | R | **A** | — | — | — |
| Schedule change > 14 days | R | C | — | **A** | I |
| Cost change ≤ $[NNN] | **A/R** (from contingency) | I | — | — | — |
| Cost change > $[NNN] | R | **A** | — | — | I |
| Major scope change | R | C | C | **A** | I |
| Project termination | R | C | **A** | — | I |
| Vendor selection | R | **A** | — | — | I |
| Hiring / firing on team | C | **A** | — | — | — |
| Risk response (Critical) | R | **A** | I | — | I |
| Quality gate pass/fail | R | **A** | I (gate 0,2) | — | C |
| Closure / final acceptance | R | **A** | I | — | I |

**A = Accountable (one only) · R = Responsible (does the work) · C = Consulted · I = Informed**

---

## 4. Escalation Path

```
Level 1: PM resolves (SLA: 24h)
    ↓ (unresolved or > PM authority)
Level 2: Sponsor (SLA: 24h ack, 3 days resolve)
    ↓ (unresolved or strategic)
Level 3: Steering Committee (SLA: 48h ack, 1 week resolve)
    ↓ (unresolved or organization-level)
Level 4: Executive Leadership / Board
```

See `policies/escalation.md` for full triggers and templates.

---

## 5. Ethics & Conduct Standards (PMBOK 8 Principle 4: Accountable Leadership)

All project participants commit to:

- **Honesty** — Provide truthful status; no green-shifting; raise issues early
- **Responsibility** — Own outcomes; admit mistakes; fix them
- **Respect** — Treat all stakeholders, team members, vendors with dignity
- **Fairness** — Make decisions transparently; avoid conflicts of interest
- **Compliance** — Follow all laws, contracts, and organizational policies
- **Confidentiality** — Protect sensitive data; respect IP rights
- **No retaliation** — Anyone may raise concerns without fear

**Reporting concerns:** [Email / hotline / ombudsperson contact]

---

## 6. Compliance & Regulatory Requirements

| Regulation / Standard | Applicability | Owner | Evidence |
|---|---|---|---|
| [GDPR / CCPA / etc.] | [Data handling] | [Name] | [Compliance report] |
| [SOX / Industry] | [Financial controls] | [Name] | [Audit log] |
| [Internal Policy XYZ] | [Scope] | [Name] | [Sign-off] |

---

## 7. Audit & Oversight

| Audit Type | Frequency | Performed By | Output |
|---|---|---|---|
| Process audit | Quarterly | PMO | Audit report |
| Financial audit | At Gate 2 + Gate 4 | Finance | Reconciliation |
| Risk audit | Monthly | PM + SMEs | Risk audit log |
| Quality audit | Per milestone | QA | QA report |
| Lessons learned | Per phase | PM + team | LL register |

---

## 8. Reporting Cadence

| Report | Frequency | Audience | Owner |
|---|---|---|---|
| Weekly Status (RAG) | Weekly | Sponsor + Steering | PM |
| Steering Pack | Monthly | Steering Committee | PM |
| Risk Update | Weekly | Sponsor | PM |
| Finance Report (EVM) | Bi-weekly | Sponsor + Finance | PM |
| PMO Compliance Report | Monthly | PMO | PM |

---

## 9. Sustainability & Ethics Oversight (PMBOK 8 Principle 5)

- ESG impacts reviewed at each Steering meeting
- Sustainability metrics tracked alongside cost/schedule (see `templates/governance/sustainability_plan.md`)
- AI use governed per `templates/governance/ai_in_pm_plan.md`
- Ethics concerns escalated per Section 5

---

## 10. Change History

| Version | Date | Changed By | Description |
|---|---|---|---|
| 1.0 | | | Initial framework |

---

*Template Reference: PMBOK 8th Ed. Performance Domain: Governance*
*Aligned with: policies/change_control.md, policies/escalation.md, policies/quality_gates.md, policies/communication.md*
