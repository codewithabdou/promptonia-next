"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import PROMPTS from "@data/prompts";

import Form from "@components/Form";

const EditPrompt = () => {
  const router = useRouter();
  const id = useParams();
  console.log(id.promptId);

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: PROMPTS.at(id.promptId - 1).prompt,
    tag: PROMPTS.at(id.promptId - 1).tag,
  });

  const editPrompt = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      router.push("/");
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={editPrompt}
    />
  );
};

export default EditPrompt;
