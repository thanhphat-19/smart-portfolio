---
title: "Getting Started with RAG: Build a Document Q&A System with LangChain"
date: "2025-04-30"
author: "Ngô Thành Phát"
category: "AI Engineering"
tags: ["RAG", "LangChain", "LLM", "Python", "Vector Database"]
description: "A practical introduction to Retrieval-Augmented Generation (RAG). Learn how to build a document Q&A system from scratch using LangChain, a vector database, and an LLM."
image: "/images/posts/rag-langchain.png"
---

# Getting Started with RAG: Build a Document Q&A System with LangChain

Retrieval-Augmented Generation (RAG) is one of the most impactful patterns in applied AI engineering today. Instead of relying solely on what an LLM memorized during training, RAG lets you feed it relevant, up-to-date context at inference time.

In this post, I'll walk you through the core concepts and show you how to build a simple but functional Q&A system.

## What is RAG?

A standard LLM answers questions from its parametric memory (weights). RAG adds a **retrieval step** that:

1. Converts your documents into vector embeddings
2. Stores them in a vector database
3. At query time, fetches the most relevant chunks
4. Injects those chunks into the LLM prompt as context

This dramatically reduces hallucination and lets your AI work with private or recent data.

## Core Components

```python
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_community.vectorstores import FAISS
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.chains import RetrievalQA
```

## Step 1: Chunk Your Documents

Large documents need to be split into smaller chunks so the retriever can find precise, relevant passages.

```python
splitter = RecursiveCharacterTextSplitter(
    chunk_size=800,
    chunk_overlap=150,
)
chunks = splitter.split_documents(documents)
```

## Step 2: Embed and Store

```python
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
vectorstore = FAISS.from_documents(chunks, embeddings)
```

## Step 3: Build the QA Chain

```python
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
retriever = vectorstore.as_retriever(search_kwargs={"k": 5})

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=retriever,
    return_source_documents=True,
)
```

## Step 4: Query

```python
result = qa_chain.invoke({"query": "What is the refund policy?"})
print(result["result"])
```

## Key Takeaways

- **Chunk size matters** — too large and retrieval is noisy, too small and you lose context
- **Overlap helps** — overlapping chunks prevent losing information at boundaries
- **Re-ranking improves quality** — after retrieval, re-rank by relevance before injecting into the prompt
- **Metadata filtering** — add metadata to chunks so you can filter by document, date, or category

This is just the starting point. In future posts, I'll cover advanced patterns like hybrid search, knowledge graphs for RAG, and multi-hop reasoning.

---

*This is a placeholder post. More articles coming soon.*
