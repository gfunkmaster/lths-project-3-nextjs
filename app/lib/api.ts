import { IPost } from "./definitions";

const API_BASE_URL: string = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async (): Promise<IPost[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    const data: IPost[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const createPost = async (postData: Partial<IPost>): Promise<IPost> => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export const updatePost = async (
  postId: number,
  updatedData: Partial<IPost>
): Promise<IPost> => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error updating post:", error);
    throw error;
  }
};

export const deletePost = async (postId: number): Promise<void> => {
  try {
    await fetch(`${API_BASE_URL}/posts/${postId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log("ERROR deleting post", error);
    throw error;
  }
};
