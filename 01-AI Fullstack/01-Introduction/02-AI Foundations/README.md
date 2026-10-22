# 02. AI Foundations

> **Big idea:** AI is not magic and it is not just a chatbot. It is a way of building software systems that recognize patterns, make predictions, generate content, and support human decision-making.

This module covers the core concepts, history, and terminology you need before building AI-powered apps.

---

## Table of Contents

1. [Understanding Intelligence](#1-understanding-intelligence)
2. [Brief History of AI](#2-brief-history-of-ai)
3. [Types of AI & Key Concepts](#3-types-of-ai--key-concepts)
4. [How LLMs Actually Work](#4-how-llms-actually-work)
5. [Key Takeaways](#5-key-takeaways)
6. [Glossary](#6-glossary)

---

## 1. Understanding Intelligence

Intelligence is the ability to understand a situation, connect ideas, learn from experience, and solve problems to reach a goal. It is more than memorizing facts; it is about adapting.

| | Natural intelligence | Artificial intelligence |
|---|---|---|
| **Basis** | Brain, nerves, senses, body | Software, hardware, data, algorithms |
| **Learns from** | Experience, teaching, feedback | Training data, examples, optimization |
| **Strengths** | Common sense, flexibility, emotion | Speed, scale, pattern recognition |
| **Weaknesses** | Slow calculation, bias, fatigue | Hallucinations, no lived experience |

**Everyday AI:** recommendation engines (Netflix, YouTube), spam filters, navigation apps, code assistants (Copilot, Cursor), support bots, semantic search.

---

## 2. Brief History of AI

| Period | What happened |
|---|---|
| **1950s: The Dream** | Alan Turing proposes the Imitation Game (Turing Test). The term "Artificial Intelligence" is coined at the Dartmouth Conference (1956). Early researchers try Symbolic AI, hand-coding every rule. |
| **AI Winters** | Rule-based systems fail on messy real-world problems. Computers are slow, memory is expensive, promises go unmet, and funding dries up. |
| **2010s: Deep Learning boom** | Two breakthroughs: **Big Data** and **GPUs**. Focus shifts from hand-written rules to neural networks that learn from data. |
| **2017: Transformer era** | Google publishes *Attention Is All You Need*. Transformers process the whole input at once and "pay attention" to context. This is the **T** in GPT and the engine behind ChatGPT, Claude, and Gemini. |
| **Modern AI apps** | Developers call powerful models through APIs and build AI features into normal web apps. |

**Why rules fell short:** real life has too many exceptions. Machine learning let computers learn patterns from data instead.

**Why transformers mattered:** in "The bank was closed because the river overflowed," context tells the model that *bank* means a riverbank, not a financial bank.

---

## 3. Types of AI & Key Concepts

### 3.1 The layers of AI (nested circles)

```
Artificial Intelligence
└── Machine Learning
    └── Deep Learning
        └── Generative AI
```

| Layer | Meaning | Examples |
|---|---|---|
| **AI** | Any technique that lets computers perform tasks that seem to need human intelligence, including simple rule-based systems | 1980s chess programs, thermostats, scripted chatbots |
| **Machine Learning** | Computers learn patterns from data instead of hand-written rules | Spam detection, recommendations, fraud detection |
| **Deep Learning** | ML using many-layered neural networks; great for images, audio, text, video | Face recognition, speech-to-text, translation, AlphaGo |
| **Generative AI** | Deep learning that creates *new* content rather than only classifying existing data | ChatGPT, Claude, Gemini, DALL·E, Midjourney, Copilot |

**Discriminative vs. generative:** traditional models answer "Is this a cat or a dog?" Generative models create "a blue cat eating pizza on the moon."

### 3.2 The model

- **AI/ML/DL** = the *process* (the verb: learn, analyze, create).
- **A model** = the *result* (the noun: the trained file).
- **Inference** = using the trained model on new input.

*Analogy:* ML is the student studying for an exam, the model is the student's brain after studying, and inference is answering a new question.

With hosted AI APIs, you usually don't download the model; you send requests to a provider that runs it.

### 3.3 Levels of intelligence

| Level | Name | Status |
|---|---|---|
| **ANI** | Artificial Narrow Intelligence ("The Specialist") | Exists today. This includes all current AI, even ChatGPT, Claude, and Gemini. |
| **AGI** | Artificial General Intelligence ("Human Level") | Theoretical. Actively pursued by OpenAI, Google DeepMind, Anthropic. |
| **ASI** | Artificial Superintelligence | Speculative. Surpasses humans in all areas. |

> **Avoid hype:** sounding human is not the same as having human common sense, memory, responsibility, or understanding.

### 3.4 Foundation models

Large, general-purpose models trained on broad data and adapted via prompts, tools, retrieved data, or fine-tuning.

| Model type | Focus | Example use |
|---|---|---|
| **LLMs** | Text and code | Chatbots, summarizers, coding assistants, document Q&A |
| **Vision models** | Images and video | Object detection, image generation |
| **Audio models** | Speech and sound | Transcription, voice assistants |
| **Multimodal models** | Multiple input types | Reading a screenshot and explaining the error |

---

## 4. How LLMs Actually Work

> **Core mental model:** an LLM does not search its brain like a database. It generates likely next tokens based on learned patterns and the context you provide.

### 4.1 The next-token game
The model calculates probabilities for the next token, picks one, appends it, and repeats. This is how long answers are written one small piece at a time.

### 4.2 Tokens
Text is split into tokens (whole words, word parts, punctuation, or spaces). Tokens affect **cost**, **context limits**, and **speed**. Long prompts and long answers use more tokens.

### 4.3 Context window
The amount of text the model can consider in one request: system instructions, chat history, current message, retrieved data, and examples. Think of it as a whiteboard.

> **Developer lesson:** the model only remembers what you send in the current request. For memory across sessions, store it in a database and send relevant parts back.

### 4.4 Temperature

| Setting | Behavior | Good for |
|---|---|---|
| **Low** | Precise, stable, predictable | Code, math, factual Q&A, structured JSON |
| **Medium** | Balanced, conversational | Chatbots, tutoring, product copy |
| **High** | Creative, varied, surprising | Brainstorming, stories, marketing ideas |

### 4.5 Hallucinations
When a model gives a confident answer that is wrong, invented, or unsupported. It happens because the model generates *likely* text and does not verify truth. In development, models may invent package names, functions, or APIs that don't exist.

---

## 5. Key Takeaways

- AI is a **co-pilot, not the captain**. Never accept code or explanations you can't explain, test, or verify.
- Nearly all AI today is **narrow** (ANI).
- Generative AI is a subset of deep learning, which is a subset of machine learning, which is a subset of AI.
- Transformers (2017) are the foundation of modern LLMs.
- LLMs predict **tokens**, work within a **context window**, and can **hallucinate**.
- AI-powered apps are still software applications. Developers must design the UI, backend flow, database, prompts, validation, testing, and user experience.

---

## 6. Glossary

| Term | Definition |
|---|---|
| **AI Winter** | A period of reduced funding and progress after AI failed to meet expectations |
| **Context window** | The text a model can consider in a single request |
| **Deep Learning** | ML using neural networks with many layers |
| **Foundation model** | A large general-purpose model adapted for many tasks |
| **Generative AI** | AI that creates new content (text, images, audio, code) |
| **GPU** | Graphics Processing Unit; hardware suited to the parallel computation AI training needs |
| **Hallucination** | A confident but incorrect or invented AI output |
| **Inference** | Using a trained model to process new input |
| **LLM** | Large Language Model; predicts the next token in a sequence |
| **Machine Learning** | Systems that learn patterns from data rather than explicit rules |
| **Model** | The trained result of an ML process |
| **Neural network** | A computational model loosely inspired by the brain |
| **Temperature** | A setting controlling how predictable or creative output is |
| **Token** | A unit of text (word, word part, punctuation) the model processes |
| **Transformer** | The architecture that lets models attend to a whole input at once |