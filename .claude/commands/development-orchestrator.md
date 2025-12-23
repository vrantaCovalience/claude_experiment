Orchestrate front-end feature development across backend, frontend, and infrastructure layers with modern API-first approach:

[Extended thinking: This workflow coordinates multiple specialized agents to deliver a complete front-end feature from architecture through deployment. It follows feature development principles. Each phase builds upon previous outputs, creating a cohesive system with proper separation of concerns, comprehensive testing, and production-ready deployment. The workflow emphasizes modern practices like component-driven UI development, feature flags, observability, and progressive rollout strategies.]

## Phase 1: Architecture & Design Foundation

### 1. Frontend Component Architecture

- Use Task tool with subagent_type="frontend-developer"
- Prompt: "Design frontend architecture and component structure for: $ARGUMENTS. Based on the API contracts from previous step, design component hierarchy, state management approach (Redux/Zustand/Context), routing structure, and data fetching patterns. Include accessibility requirements and responsive design strategy. Plan for Storybook component documentation."
- Expected output: Component tree diagram, state management design, routing configuration, design system integration plan, accessibility checklist
- Context: API specifications from step 2, UI/UX requirements

### 2. Frontend Implementation

- Use Task tool with subagent_type="frontend-developer"
- Prompt: "Implement frontend application for: $ARGUMENTS. Build React/Next.js components using the component architecture from Phase 1. Implement state management, API integration with proper error handling and loading states, form validation, and responsive layouts. Create Storybook stories for components. Ensure accessibility (WCAG 2.1 AA compliance)."
- Expected output: React components, state management implementation, API client code, Storybook stories, responsive styles, accessibility implementations
- Context: Component architecture from step 1, API contracts

### 3. End-to-End Testing

- Use Task tool with subagent_type="test-automator"
- Prompt: "Implement E2E tests for: $ARGUMENTS. Create Playwright/Cypress tests covering critical user journeys, cross-browser compatibility, mobile responsiveness, and error scenarios. Test feature flags integration, analytics tracking, and performance metrics. Include visual regression tests."
- Expected output: E2E test suites, visual regression baselines, performance benchmarks, test reports
- Context: Frontend implementations from Step - 2

### 4. Security Audit & Hardening

- Use Task tool with subagent_type="security-auditor"
- Prompt: "Perform security audit for: $ARGUMENTS, check for OWASP Top 10 vulnerabilities, audit frontend for XSS/CSRF risks, validate input sanitization, and review secrets management. Provide penetration testing results and remediation steps."
- Expected output: Security audit report, vulnerability assessment, remediation recommendations, security headers configuration
- Context: All implementations from step - 2

## Configuration Options

- `stack`: Specify technology stack (e.g., "React/FastAPI/PostgreSQL", "Next.js/Django/MongoDB")
- `feature_flags`: Enable/disable feature flag integration
- `testing_depth`: Comprehensive or essential
- `compliance`: Specific compliance requirements (GDPR, HIPAA, SOC2)

## Success Criteria

- Frontend integration tests passing
- E2E tests covering critical user journeys
- Security audit passed with no critical vulnerabilities
- Performance metrics meeting defined SLOs
- Observability stack capturing all key metrics
- Feature flags configured for progressive rollout
- Documentation complete for all components

## Coordination Notes

- Each phase builds upon outputs from previous phases
- Parallel tasks in step - 2 can run simultaneously but must converge for step - 3
- Maintain traceability between requirements and implementations
- Use correlation IDs across all services for distributed tracing
- Document all architectural decisions in ADRs
- Ensure consistent error handling and API responses across services

Feature to implement: $ARGUMENTS
