# Change Control Policy
**PMBOK Reference:** 4.6 Perform Integrated Change Control | Knowledge Area: Integration Management

---

## Purpose

This policy governs how changes to the approved project baselines (scope, schedule, cost, quality) are identified, assessed, approved, and implemented. No baseline change may be implemented without following this process.

---

## Scope

This policy applies to **all changes** to:
- Project scope (deliverables, requirements, WBS)
- Schedule baseline (milestones, end date, critical path)
- Cost baseline / Budget at Completion (BAC)
- Quality standards or acceptance criteria
- Resource plan (key resource changes)
- Procurement contracts

---

## Change Control Thresholds

| Change Type | PM Authority | Sponsor Authority | CCB Required |
|---|---|---|---|
| Schedule change ≤ 5 days | ✓ PM approves | — | — |
| Schedule change 6–14 days | — | ✓ Sponsor approves | — |
| Schedule change > 14 days | — | — | ✓ CCB required |
| Cost change ≤ $[N] | ✓ PM approves (from contingency) | — | — |
| Cost change $[N]–$[N] | — | ✓ Sponsor approves | — |
| Cost change > $[N] | — | — | ✓ CCB required |
| Scope addition / removal | — | — | ✓ CCB required |
| Quality standard change | — | ✓ Sponsor approves | — |
| Emergency change | PM implements → CCB ratifies within 48h | | |

---

## Change Control Board (CCB)

| Member | Role | Vote Weight |
|---|---|---|
| Project Sponsor | Chair | Decisive vote |
| Project Manager | Secretary | Advisory |
| Customer Representative | Member | Equal vote |
| Tech Lead | Member | Equal vote |
| Finance Representative | Member (for cost changes) | Equal vote |

**Quorum:** Minimum 3 members including Sponsor must be present for a binding decision.

---

## Change Control Process

```
Step 1: IDENTIFY
    Anyone identifies a potential change
    ↓
Step 2: LOG
    PM logs the change request (CR form) and assigns CR number
    ↓
Step 3: ASSESS
    PM performs impact analysis (scope, schedule, cost, risk, quality)
    ↓
Step 4: REVIEW
    PM reviews with relevant SMEs; prepares recommendation
    ↓
Step 5: DECIDE
    PM authority → PM decides
    Sponsor authority → PM recommends to Sponsor
    CCB required → PM presents to CCB; CCB votes
    ↓
Step 6: COMMUNICATE
    PM communicates decision to all stakeholders
    ↓
Step 7: IMPLEMENT (if approved)
    Update affected baselines, plans, and PMIS
    Team implements the change
    ↓
Step 8: VERIFY
    PM verifies change implemented correctly
    Close the CR
```

---

## Change Request Requirements

Every CR must include:
- [ ] Clear description of the change
- [ ] Reason / justification
- [ ] Impact analysis: schedule, cost, scope, quality, risk
- [ ] Alternatives considered
- [ ] PM recommendation
- [ ] Requestor signature

---

## Prohibited Actions

- No work may begin on a change until it is formally approved
- No verbal approvals — all decisions must be documented in writing
- No retroactive change requests (except emergency changes, which must be filed within 24h)
- Gold-plating (adding features not in scope) is strictly prohibited

---

## Emergency Change Procedure

1. PM assesses risk of delaying vs. implementing immediately
2. PM consults Sponsor verbally and obtains verbal authorization
3. Change is implemented
4. Formal CR is submitted within 24 hours
5. CCB ratifies within 48 hours

---

## Baseline Updates

Upon CR approval, the PM must update:
- [ ] Project Management Plan (affected subsidiary plans)
- [ ] Schedule Baseline (if schedule affected)
- [ ] Cost Baseline / BAC (if budget affected)
- [ ] Risk Register (for any new risks introduced)
- [ ] Change Log
- [ ] Stakeholder communications

---

*Policy Owner: Project Manager | Reviewed: Quarterly or at each phase gate*
*Reference: PMBOK 6th Ed. Section 4.6 | PMBOK 7th Ed. Principle: Stewardship*
