"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Profile from "@/components/Profile";

const ProfileWithIDPage = ({ params }) => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${params.id}/posts`, {
        cache: "no-cache",
      });
      const data = await res.json();

      setPosts(data);
    };

    const fetchUser = async () => {
      const res = await fetch(`/api/users/${params.id}`);
      const data = await res.json();

      setUser(data);
    };

    fetchPosts();
    fetchUser();
  }, []);

  const handleEdit = async (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirm = confirm("Are you sure you want to delete?");

    if (hasConfirm) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((p) => p._id !== post._id);
        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name={user?.username}
      desc="Welcome"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};
export default ProfileWithIDPage;
