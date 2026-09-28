# KANWorld Lab — Interpretable Latent Dynamics for Autonomous Networks

KANWorld Lab is a React research prototype demonstrating an interpretable, KAN-parameterised latent state-space world model for synthetic telecom network dynamics.

## Live Demo

https://kanworld-lab.charanvaranasi44.workers.dev

## Features

### 1. Latent Dynamics Playground

- Synthetic telecom network dashboard
- Observed variables:
  - Traffic load
  - Throughput
  - Latency
  - Packet loss
- Hidden latent variables:
  - Congestion state
  - Channel quality
  - Interference state
- Visual KAN world-model architecture
- Deterministic multi-step network rollout
- Actual network behaviour versus KAN prediction chart
- Adjustable traffic, noise, observability and rollout horizon
- Synthetic RMSE, R², latent recovery, parameter count and interpretability metrics

### 2. Interpretability Inspector

- Comparison of Linear SSM, GRU, Transformer and KAN-SSM models
- Symbolic latent-transition equations
- KAN pruning and complexity-reduction statistics
- Counterfactual network action inspector
- Predicted effects at `t+1`, `t+5` and `t+10`
- Interpretable explanations referencing latent network states

## Technology

- React
- TypeScript
- Vinext/Vite
- Recharts
- Tailwind CSS
- Cloudflare Workers
- Wrangler
