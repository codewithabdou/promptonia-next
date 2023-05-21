"use client";

import { useRouter } from "next/navigation";

import Profile from "@components/Profile";
import PROMPTS from "@data/prompts";

const MyProfile = () => {
  const router = useRouter();




  const handleEdit = (post) => {
    router.push(`/edit-prompt/${post.id}`);
  };


  const handleDelete = (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
        router.push("/")
    }
  };

  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
      data={PROMPTS}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
