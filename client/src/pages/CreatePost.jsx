import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loading } from "../components";

export default function CreatePost() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};

  const handleChange = (e) => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[18px] max-w[500px]">
          Create imagination and visually stunning images through by DALL-E AI
          and share them
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            LabelName="Your Name"
            type="text"
            name="name"
            placeholder="SOME NAME"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            LabelName="prompt"
            type="text"
            name="prompt"
            placeholder="SOME NAME"
            value={form.name}
            handleChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
}
