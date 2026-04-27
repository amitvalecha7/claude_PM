# Ethics & Responsible Technology Plan
**PMBOK 8 New Content:** Ethical Technology Use | Edition: PMBOK 8th (Nov 2025)

> Aligned with PMBOK 8 Principle 4 (Accountable Leadership) and Principle 5 (Integrated Sustainability), this plan defines how the project ensures technology is designed, built, and deployed responsibly.

---

## 1. Project Information

| Field | Value |
|---|---|
| **Project Name** | [Project Name] |
| **Project ID** | [PRJ-YYYY-NNN] |
| **Prepared By** | [PM Name] |
| **Ethics Lead** | [Name / DPO] |
| **Date** | [YYYY-MM-DD] |

---

## 2. Ethical Principles (Adopted)

This project adheres to the following:

| Principle | Commitment |
|---|---|
| **Privacy by Design** | Minimize data collection; protect PII by default |
| **Transparency** | Disclose how decisions are made; explain AI outputs |
| **Fairness & Non-discrimination** | Test for and mitigate biased outcomes |
| **Accessibility** | Meet WCAG 2.2 AA / Section 508 / EN 301 549 standards |
| **Accountability** | Clear human ownership for every automated decision |
| **Security** | Protect data, systems, users from harm |
| **Beneficence** | Maximize benefit; minimize harm |
| **Autonomy** | Respect user choice; meaningful consent; right to opt out |

---

## 3. Privacy & Data Protection

### Data Inventory
| Data Element | Classification | Source | Storage Location | Retention | Lawful Basis (GDPR) |
|---|---|---|---|---|---|
| [User name / email] | PII | User input | [System] | [N years] | Consent / Contract |
| [Behavioral data] | PII | Analytics | [System] | [N years] | Legitimate interest |
| [Project records] | Internal | Team | PMIS | 7 years | Contract |

### Privacy Controls
- [ ] Data Protection Impact Assessment (DPIA) completed
- [ ] Privacy notice published (where users are involved)
- [ ] Consent mechanisms in place (where required)
- [ ] Data Subject Access Request (DSAR) process defined
- [ ] Right to erasure ("right to be forgotten") supported
- [ ] Encryption at rest and in transit
- [ ] Access controls (least privilege, role-based)
- [ ] Audit logs maintained

---

## 4. Accessibility Requirements

| Standard | Applicability | Compliance Target |
|---|---|---|
| WCAG 2.2 Level AA | Web/digital deliverables | 100% pass |
| Section 508 (US) | If US Federal | Required |
| EN 301 549 (EU) | If EU Public | Required |
| Mobile accessibility (Apple/Android) | If mobile | Platform standards |

**Accessibility testing:** Manual + automated (axe, WAVE, etc.) on every release.

---

## 5. AI Fairness & Bias Mitigation

If the project produces or uses AI/ML systems:

| Phase | Action | Owner |
|---|---|---|
| Design | Define protected attributes; choose fairness metrics (e.g., demographic parity, equalized odds) | Tech Lead |
| Data | Audit training data for representation; document gaps | Data Eng |
| Model | Test for disparate impact across groups | ML Eng |
| Deployment | Monitor live outputs for fairness drift | Ops |
| Use | Provide appeal/override mechanism | PM |

**Fairness Audit Schedule:** Pre-launch + quarterly post-launch.

---

## 6. Security & Safety

- [ ] Threat model completed (STRIDE / PASTA)
- [ ] Penetration testing scheduled
- [ ] Vulnerability management process defined
- [ ] Incident response plan documented
- [ ] Disclosure / responsible vulnerability reporting channel published
- [ ] Safety review for any user-impacting features

---

## 7. Stakeholder & User Rights

Users / data subjects have the right to:
- Be informed about data collection and use
- Access their data
- Correct inaccurate data
- Request erasure (subject to legal exceptions)
- Object to processing
- Data portability
- Not be subject to fully-automated decisions with significant effect (GDPR Art. 22)

**How to exercise:** [Email / portal / contact]

---

## 8. Ethics Review Gates

| Gate | Trigger | Reviewer | Decision |
|---|---|---|---|
| Pre-design | Before solution selected | Ethics Lead + DPO | Proceed / revise / stop |
| Pre-build | Before development starts | Ethics Lead | Proceed / revise / stop |
| Pre-launch | Before deployment | Ethics Lead + Sponsor | Launch / hold / revise |
| Post-launch | 30 days after launch | Ethics Lead | Continue / adjust / pause |

---

## 9. Risk Register Entries (Ethics-specific)

| Risk | Probability | Impact | Response |
|---|---|---|---|
| Privacy breach | L | H (regulatory + reputational) | DPIA, encryption, training |
| Discriminatory outcome | M | H | Fairness audits, HITL |
| Accessibility failure (lawsuit, exclusion) | M | M | Accessibility testing, remediation |
| Misuse of automated decision | M | H | HITL, appeal mechanism, logging |
| Vendor ethics failure (supplier) | L | M | Code of conduct, audits |
| Regulatory change (AI Act, etc.) | M | H | Legal monitoring, design flexibility |

---

## 10. Reporting Concerns

Anyone may raise ethics concerns without fear of retaliation:
- **Internal:** [Ethics email / hotline / ombudsperson]
- **External regulator:** [Relevant authority — DPA, AG, etc.]
- **Anonymous:** [Whistleblowing platform if available]

**Acknowledgment SLA:** 48 hours · **Investigation SLA:** 30 days · **Resolution communicated:** Always

---

## 11. Compliance Checklist

- [ ] DPIA / privacy assessment complete
- [ ] Accessibility plan in place
- [ ] Security review scheduled
- [ ] AI fairness assessment (if applicable)
- [ ] Ethics review gates defined and scheduled
- [ ] User rights mechanisms in place
- [ ] Incident response plan
- [ ] Concern reporting channel published
- [ ] Team trained on ethics & responsible tech

---

## 12. Approval

| Role | Name | Signature | Date |
|---|---|---|---|
| Ethics Lead | | | |
| Data Protection Officer | | | |
| Security Officer | | | |
| Project Manager | | | |
| Project Sponsor | | | |

---

*Template Reference: PMBOK 8th Ed. — Ethical Technology Use content area | Principles 4 & 5*
*Cross-references: templates/governance/ai_in_pm_plan.md, templates/governance/sustainability_plan.md*
*Aligned with: GDPR, EU AI Act, NIST AI RMF, WCAG 2.2, ISO/IEC 27001, ISO/IEC 42001*
