export const siteConfig = {
  name: "Prithvi Alluri",
  title: "AI/ML Engineer",
  description: "Portfolio website of Prithvi Krishna",
  accentColor: "#1d4ed8",
  social: {
    email: "aprithvikrishna@gmail.com",
    linkedin: "https://www.linkedin.com/in/prithvi-alluri5969",
    github: "https://github.com/prithvi1739",
  },
  aboutMe:
    "AI/ML Engineer passionate about building intelligent systems. Exploring deep learning, transformers, and real-world applications of AI across NLP, multi-agent systems, and applied machine learning.",
  skills: ["Python", "Data Structures and Algorithms", "SQL", "R", "Scala", "Flask", "Docker", "Django", "PostgreSQL", "MongoDB", "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV", "NLTK", "Transformers (Hugging Face)", "LLaMA", "vLLM",  "GANs", "CNN", "RNN", "LSTM", "BERT", "GPT",  "CUDA (basic)", "batch optimization", "ML inference tuning", "LangGraph", "Autogen", "CrewAI", "GPT", "LangChain", "FAISS", "LlamaIndex", "Azure AI Search", "Pinecone", "Streamlit", "Prompt Engineering", "Human-in-the-loop Evaluation"],
  projects: [
    {
      name: "Research Paper Implementation - Attention is all you need(Transformers)",
      description:
        "Built a from-scratch PyTorch Transformer based on “Attention Is All You Need,” replacing sequential recurrence with fully parallel self-attention. The model includes multi-head attention, sinusoidal positional encodings, residual + LayerNorm blocks, and an encoder–decoder with causal masking. Training uses label smoothing and a warmup LR schedule, with clean configs for heads/depth/d_model. This is the first in an ongoing series where I implement and benchmark core ML and GenAI papers, focusing on readable code and reproducible results.",
      link: "https://github.com/prithvi1739/Attention_is_all_you_need-Implementation-of-Research-Paper-",
      skills: ["Python 3", "PyTorch", "NumPy", "Transformers", "Self-Attention", "Multi-Head Attention", "Positional Encodings", "LayerNorm", "Residual Connections", "Sequence Modeling", "Autoregressive Decoding", "Beam/Greedy Search", "Tokenization (BPE/WordPiece)", "Label Smoothing", "LR Warmup", "Gradient Clipping", "CUDA", "Unit Testing", "Git", "Docker", "MLOps", "NLP", "Deep Learning", "Machine Learning", "Generative AI", "LLMs"],
    },
    {
      name: "StoryWeaver AI: Personalized Narrative Generator",
      description:
        "AI Story Weaver is a generative AI application designed to create engaging stories for children. By using a character and a genre (e.g., adventure, fantasy), the application generates unique narratives.",
      link: "https://github.com/Raju1998060745/stories123",
      skills: ["Python", "Backend Development (Python APIs)", "Generative AI", "Mistral (fine-tuning & inference)", "Retrieval-Augmented Generation (RAG)", "Vector Databases", "Embeddings", "Prompt Engineering", "Frontend Web Development", "API Design & Integration", "Model Serving", "Text-to-Speech (TTS)", "Audio Processing", "Interactive UI/State Management", "Version Control (Git)"],
    },
    {
      name: "AI-Optimized Polymer Simulation: MOBO for Coarse-Grained Models",
      description:
        "AI meets materials science: a demo showing how optimization can make polymer simulations faster and more accurate, inspired by enterprise R&D workflows.",
      link: "https://github.com/prithvi1739/AI-Optimized-Polymer-Simulation-MOBO-for-Coarse-Grained-Models",
      skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook", "Git & GitHub", "Conda/venv", "PowerShell/CLI (Windows)", "Multi-objective optimization (NSGA-II)", "Optuna", "Bayesian Optimization (BoTorch/Ax, optional)", "PyTorch (CPU)", "scikit-learn", "Basic statistics & error metrics", "Data visualization", "Molecular modeling basics (AAMD vs CGMD)"],
    },
  ],
  experience: [
    {
      company: "Quadrant Technologies",
      title: "Software Engineer AI/ML",
      dateRange: "May 2025 - Present",
      bullets: [
        "Deployed autonomous AI agents (LangGraph, Autogen, CrewAI) with GPT-4/Claude/LLaMA, boosting decision-making reliability by 30% in production workflows.",
        "Built RAG pipelines (FAISS, Pinecone, Azure AI Search) with ETL + FastAPI, cutting retrieval latency by 40% in multi-agent environments.",
        "Scaled cloud deployments via Docker + Kubernetes (EKS/GKE), achieving 99.9% uptime and automated monitoring with CI/CD pipelines.",
      ],
    },
    {
      company: "VR IT Resources",
      title: "AI/Data Enfineer",
      dateRange: "Feb 2024 - Apr 2025",
      bullets: [
        "Engineered multi-agent systems with human-in-the-loop evaluation, improving safe planning accuracy by 25% across workflows.",
        "Designed terabyte-scale data pipelines with GCP DataProc, BigQuery, and Airflow, reducing ETL job runtime by 45%.",
        "Automated ML lifecycle using MLflow + SageMaker, cutting model deployment cycle from weeks to <3 days.",
      ],
    },
    {
      company: "Pharynx AI",
      title: "Jr. Data Scientist - Natural Language Processing",
      dateRange: "Jul 2021 - Dec 2021",
      bullets: [
        "Processed and annotated 100k+ retail call logs, creating high-quality labeled datasets for intent recognition.",
        "Built ASR + NLU pipeline (AWS Transcribe, BERT, SageMaker) that improved intent classification accuracy by 22%.",
        "Deployed voice bot with AWS Lambda + Polly, reducing call handling time by 15% in pilot deployment.",
      ],
    },
    {
      company: "iNeuron Intelligence",
      title: "Machine Learning Intern",
      dateRange: "May 2020 - Jun 2021",
      bullets: [
        "Developed sales forecasting models (Scikit-learn, XGBoost) that improved revenue prediction accuracy by 18%.",
        "Built COVID-19 risk stratification models (TensorFlow, PyTorch), achieving 85% accuracy for patient classification.",
        "Optimized backend rendering systems (Java + Python REST APIs), improving app response time by 25%.",
      ],
    }
  ],
  education: [
    {
      school: "George Mason University",
      degree: "Master of Science (MS) in Data Analytics and Engineering",
      dateRange: "2022-2024",
      achievements: [
        "Graduated from George Mason University with 3.8 GPA.",
        "Major in Data Analytics Engineering and Minor in Machine Learning/Natural Language Processing.",
      ],
    },
    {
      school: "Amrita Vishwa Vidyapeetham, Amrita School of Engineering Bengaluru.",
      degree: "Bachelor of Technology in Electronics and Communications Engineering.",
      dateRange: "2016 -2020",
      achievements: [
        "Completed final semester Project with Outstanding Grade.",
        "Published a technical paper on a Research Journal in the final semester Project.",
        "Executive member in Science Club(Aavishkaara), Patriotic Club(The Squad), Environment Club(Prakruthi), Toast masters Bengaluru Amrita and been active organizer of Cultural fests for 3 years.",
      ],
    },
  ],
};
