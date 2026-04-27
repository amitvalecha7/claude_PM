# AI in Project Management Plan
**PMBOK 8 New Content:** AI in PM | Edition: PMBOK 8th (Nov 2025) — Section 8.4.A in /pm skill

> PMBOK 8 is the first edition to provide dedicated coverage of AI in project management. This plan governs how AI tools are selected, used, monitored, and disclosed across the project.

---

## 1. Project Information

| Field | Value |
|---|---|
| **Project Name** | [Project Name] |
| **Project ID** | [PRJ-YYYY-NNN] |
| **Prepared By** | [PM Name] |
| **Date** | [YYYY-MM-DD] |
| **AI Governance Owner** | [Name / Role] |

---

## 2. Approved AI Use Cases

| # | Use Case | AI Capability | PM Process Supported | Approved? |
|---|---|---|---|---|
| 1 | Status report drafting | LLM (GPT-class / Claude) | Manage Communications | ✓ |
| 2 | Schedule risk forecasting | ML predictive model | Monitor Risks | ✓ |
| 3 | Backlog refinement / story drafting | LLM | Plan Scope | ✓ |
| 4 | Meeting transcription & action extraction | Speech-to-text + LLM | Manage Communications | ✓ |
| 5 | EVM trend analysis | ML / statistical model | Control Costs | ✓ |
| 6 | Stakeholder sentiment analysis | NLP | Monitor Stakeholder Engagement | ✓ |
| 7 | Document summarization | LLM | Manage Knowledge | ✓ |
| 8 | Code generation (if applicable) | Code LLM | Project work | ✓ |
| 9 | Test case generation | LLM | Manage Quality | ✓ |
| 10 | Bid / RFP response evaluation | LLM | Conduct Procurements | Conditional — requires HITL |

**Prohibited use cases:**
- Final HR / hiring / firing decisions
- Final budget approval
- Final procurement award decisions
- Anything involving sensitive PII without DPA approval
- Any use without human review of output

---

## 3. Approved AI Tools

| Tool | Vendor | Use Case | Data Classification Allowed | Approval Date |
|---|---|---|---|---|
| Claude (claude.ai / API) | Anthropic | LLM tasks, drafting, analysis | Internal, no PII | [Date] |
| [GitHub Copilot] | Microsoft | Code generation | Public + internal code | [Date] |
| [Project AI tool] | [Vendor] | [Specific PM task] | [Classification] | [Date] |

**To request a new AI tool:**
1. Submit AI Tool Request form to [AI Governance Owner]
2. Include: vendor, data flow, security review, business case
3. Approval required before use

---

## 4. Data Handling Rules

| Data Type | AI Use Permitted? | Conditions |
|---|---|---|
| Public information | ✓ Yes | No restrictions |
| Internal project info (non-confidential) | ✓ Yes | Use approved tools only |
| Confidential business data | ⚠ Conditional | Self-hosted / enterprise tier only; DPA in place |
| PII (personally identifiable info) | ⚠ Conditional | Anonymize first; DPO approval; legal basis required (GDPR Art. 6) |
| Sensitive PII (health, financial, biometric) | ✗ No | Prohibited unless explicit project-specific approval |
| Customer-confidential data | ⚠ Conditional | Per customer contract terms |
| Vendor/IP-protected info | ✗ No | Prohibited unless vendor consents |

**Default principle:** If unsure, do not put it in an AI tool.

---

## 5. Human-in-the-Loop (HITL) Checkpoints

| Output Type | HITL Required? | Reviewer | Sign-off |
|---|---|---|---|
| Status report draft | ✓ Yes | PM | Before distribution |
| Risk forecast | ✓ Yes | PM | Before risk register update |
| Stakeholder communication | ✓ Yes | PM | Before sending |
| Code | ✓ Yes | Tech Lead | Before merge |
| Test cases | ✓ Yes | QA | Before execution |
| Procurement evaluation | ✓ Yes | PM + Sponsor | Before award |
| Internal summary / notes | ⚠ Recommended | Author | Before publishing |
| Brainstorming / ideation | ✗ Optional | — | — |

> **Rule:** No AI output is sent externally or used as a final decision without human review and accountability.

---

## 6. Bias, Fairness, & Quality Monitoring

- **Periodic review:** AI outputs sampled and reviewed monthly for accuracy, bias, and hallucination
- **Bias audit:** Any AI-driven decision affecting people (hiring, evaluation, prioritization) requires fairness audit
- **Hallucination check:** All AI-generated facts verified against sources before publication
- **Drift monitoring:** Quality of AI output tracked over time; degradation triggers tool review

| Metric | Target | Owner | Frequency |
|---|---|---|---|
| AI output accuracy (% reviewer agreement) | ≥ 90% | PM | Monthly |
| Hallucinations caught in review (rate) | < 5% | PM | Monthly |
| Bias incidents reported | 0 | AI Gov Owner | Continuous |

---

## 7. Disclosure & Transparency

Stakeholders must be informed when AI is materially involved in:
- Decisions affecting them
- Communications they receive
- Deliverables they accept

**Disclosure language (example):**
> "This [report / document / decision] was drafted with assistance from AI tools and reviewed by [Name] before distribution."

---

## 8. IP & Licensing

- AI-generated content: ownership defined per tool ToS; PM ensures alignment with project contract
- Training data concerns: do not use proprietary or third-party IP as input without authorization
- Output verification: AI outputs cannot be assumed copyright-free; verify originality

---

## 9. Risk Register Entries (AI-specific)

| Risk | Probability | Impact | Response |
|---|---|---|---|
| AI hallucination in stakeholder communication | M | H | HITL required; spot-check audits |
| Confidential data leak via AI prompt | L | H | Tool restrictions; training; logging |
| Over-reliance / skill atrophy | M | M | Periodic AI-free exercises; learning culture |
| Vendor outage | L | M | Backup tool identified; manual fallback |
| Regulatory change (e.g., EU AI Act) | M | H | Legal monitoring; tool re-assessment |
| Bias in AI-driven decisions | M | H | Fairness audits; HITL; appeal mechanism |

---

## 10. Training & Onboarding

All team members using AI tools must:
- [ ] Complete AI literacy training
- [ ] Read this AI in PM Plan
- [ ] Sign acceptable use acknowledgment
- [ ] Complete tool-specific training (Claude, Copilot, etc.)

---

## 11. Approval

| Role | Name | Signature | Date |
|---|---|---|---|
| AI Governance Owner | | | |
| Project Manager | | | |
| Data Protection Officer | | | |
| Project Sponsor | | | |

---

*Template Reference: PMBOK 8th Ed. — AI in Project Management content area*
*Cross-references: templates/governance/ethics_and_responsible_tech.md, policies/change_control.md*
*Aligned with: NIST AI RMF, ISO/IEC 42001, EU AI Act (where applicable)*
