# System Design Concepts (cheat sheet)

Read by `/concepts` only. For each project page, address the **Core** categories (or write "n/a — reason"). **Situational** ones only if relevant. Never claim a number you don't have.

## Core

| Category | Key concepts | Ask yourself |
|---|---|---|
| Requirements & workload | functional vs non-functional, users/stakeholders, boundaries, assumptions, traffic and growth, capacity, YAGNI | Who uses it, how much, and what must it never fail at? |
| Scalability & performance | vertical/horizontal, elasticity, stateless, caching and invalidation, CDN, latency (p95/p99), throughput, bottleneck, queueing, rate limiting | What limits it first, and what makes it faster or cheaper to scale? |
| Availability & fault tolerance | SLA/SLO/SLI, SPOF, redundancy, multi-AZ/region, failover, graceful degradation, health checks, RTO/RPO, backup/restore, DR | What happens when a piece fails, and how fast must it recover? |
| Data & consistency | SQL vs NoSQL, ACID, indexing, replication, sharding, CAP and eventual consistency (only if data is distributed), retention, migration | Where does state live, and how stale or lost may it be? |
| Security | least privilege/IAM, authn vs authz, encryption in transit/at rest, secrets, defense in depth, network segmentation, WAF, shared responsibility, audit logs | Who can touch what, and what is exposed publicly? |
| Observability | logs, metrics, traces, golden signals (latency, traffic, errors, saturation), alerting, runbooks, postmortems | How do I know it broke, and how do I find why? |
| Deployment & DevOps | CI/CD, IaC, immutable infra, blue-green/canary/rolling, rollback, environment parity, drift, DevSecOps | How does a change get out safely and back out? |
| Cost & trade-offs | TCO, right-sizing, pay-as-you-go, data egress, lifecycle policies, cost vs performance vs availability | What drives the bill, and what did I trade away? |

## Situational

| Category | Key concepts | Relevant when |
|---|---|---|
| API & communication | REST/gRPC, sync vs async, queues, pub/sub, idempotency keys, versioning, retries with backoff and jitter, circuit breaker | services or clients talk to each other |
| Distributed systems | CAP, quorum, leader election, split-brain, idempotency, at-least-once delivery, timeouts, bulkheads | more than one node shares state |
| Architecture style | monolith vs modular monolith vs microservices, layered/hexagonal, DDD, strangler, saga, outbox | the app has real structure |
| Networking | DNS, VPC, public/private subnets, NAT, security groups, load balancer, TLS termination, edge | traffic crosses networks |
| Testing | unit/integration/e2e, load/stress/soak, contract tests, resilience tests | there is code or load to verify |
| Maintainability | modularity, backward compatibility, technical debt, vendor lock-in, docs, ownership | it will live and change |
| Data processing | batch vs stream, DLQ, consumer lag, replay, ETL/ELT, data quality | events or large datasets |

## Use these habits
- Start from requirements and workload before drawing boxes.
- Say the trade-off out loud: what you chose, what you gave up, why.
- Trace one request end to end: DNS → edge → network → app → data → monitoring.
- Top 12 to know cold: scalability · HA/fault tolerance · CAP and consistency · load balancing/statelessness · caching · database choice · async/messaging · retries/timeouts/idempotency/circuit breakers · least privilege · observability/incident response · CI/CD and IaC · cost trade-offs.
- Availability budget per 30 days: 99% ≈ 7h12m · 99.9% ≈ 43m · 99.99% ≈ 4m19s.
