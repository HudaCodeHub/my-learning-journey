
The Mathematics of Meaning: Vectors & Embeddings

    Big Idea: Modern search goes beyond matching exact words. Embeddings turn text into numbers (vectors) so computers can compare meanings using math.

What is This About?

Traditional keyword search (like WHERE title LIKE '%keyword%') only checks if exact letters match. It struggles when users search with synonyms ("laptop" vs. "computer") or words with multiple meanings ("Python" the code vs. the snake).

Semantic Search solves this by searching based on meaning instead of exact characters.
Core Concepts
1. Embeddings (Meaning Fingerprints)

An embedding is a list of numbers (a vector) created by an AI model that represents the meaning of a word, sentence, or document.

    Input: "Cat"

    Output: [0.10, -0.50, 0.80, 0.90, ...]

    Key Rule: Similar meanings create vectors that point in the same direction in vector space.

2. Cosine Similarity

To check how close two meanings are, we measure the angle between their vectors using Cosine Similarity:
Cosine Similarity=∥A∥∥B∥A⋅B​

    1.0: Identical meaning

    0.7 – 0.9: Very related

    ~0.0: Unrelated

    -1.0: Opposite meaning

How Semantic Search Works

    Indexing (Setup):

        Split documents into smaller chunks.

        Turn each chunk into a vector using an embedding model.

        Save the vectors and original text in a vector database.

    Querying (Search):

        Turn the user's search question into a vector (using the same model).

        Compare the query vector against saved vectors using cosine similarity.

        Filter out low scores using a threshold (e.g., > 0.70) and return the top results.

Common Use Cases

    Smart Search: Finding "affordable notebook" when searching "budget laptop".

    Recommendations: Suggesting similar movies, products, or articles.

    Clustering: Grouping similar customer support tickets together.

    AI Chatbots (RAG): Finding the right background facts before an AI answers a question.

Quick Best Practices

    Use One Model: Always use the exact same embedding model for your documents and your search queries.

    Chunk Wisely: Keep text chunks focused—not too long, not too short.

    Combine with Keywords (Hybrid Search): Use both keyword search and semantic search when exact IDs, names, or error codes matter.

    Test Thresholds: Test similarity cutoffs with real user questions to avoid irrelevant results.

Report unsafe content Opens in a new window
