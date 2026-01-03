"use client";

import { useState } from "react";
import RichContentEditor from "./RichContentEditor";
import ImageManager from "./ImageManager";
import { useRouter } from "next/navigation";

export default function ContentForm({
  type,
  initialData,
  onSubmit,
}: any) {

  const router = useRouter();

  const defaultForm = {
  slug: "",
  title: { en: "", mr: "" },
  excerpt: { en: "", mr: "" },
  content: { en: [], mr: [] },
  images: [],
  status: "draft",
  active: true,
};

const [form, setForm] = useState({
  ...defaultForm,
  ...initialData,
  title: { ...defaultForm.title, ...initialData?.title },
  excerpt: { ...defaultForm.excerpt, ...initialData?.excerpt },
  content: { ...defaultForm.content, ...initialData?.content },
});

const [success, setSuccess] = useState(false);

  function update(path: string, value: any) {
    setForm((prev: any) => {
      const copy = structuredClone(prev);
      const keys = path.split(".");
      let obj = copy;
      while (keys.length > 1) obj = obj[keys.shift()!];
      obj[keys[0]] = value;
      return copy;
    });
  }

  function generateSlug(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await onSubmit(form);
        setSuccess(true);

        setTimeout(() => {
          router.push(
            type === "Program"
              ? "/admin/programs"
              : "/admin/news"
          );
          router.refresh();
        }, 800);
      }}
      className="space-y-10"
    >

      {success && (
        <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded shadow-lg">
          Saved successfully
        </div>
      )}


      {/* SLUG */}
      <div>
        <label className="font-semibold">Slug</label>
        <input
          className="border w-full p-2"
          value={form.slug}
          onChange={(e) => update("slug", e.target.value)}
          required readOnly
        />
      </div>

      {/* TITLES */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label>Title (EN)</label>
          <input
            className="border w-full p-2"
            value={form.title.en}
            onChange={(e) => {
              update("title.en", e.target.value);
              if (!initialData) {
                update("slug", generateSlug(e.target.value));
              }
            }}
          />
        </div>

        <div>
          <label>Title (MR)</label>
          <input
            className="border w-full p-2"
            value={form.title.mr}
            onChange={(e) => update("title.mr", e.target.value)}
          />
        </div>
      </div>

      {/* EXCERPT */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label>Excerpt (EN)</label>
          <textarea
            className="border w-full p-2"
            rows={3}
            value={form.excerpt.en}
            onChange={(e) => update("excerpt.en", e.target.value)}
          />
        </div>

        <div>
          <label>Excerpt (MR)</label>
          <textarea
            className="border w-full p-2"
            rows={3}
            value={form.excerpt.mr}
            onChange={(e) => update("excerpt.mr", e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <RichContentEditor
          label="Content (EN)"
          value={form.content?.en || []}
          onChange={(val) => update("content.en", val)}
        />

        <RichContentEditor
          label="Content (MR)"
          value={form.content?.mr || []}
          onChange={(val) => update("content.mr", val)}
        />
      </div>

      {/* STATUS */}
      <div className="flex gap-6 items-center">
        <select
          className="border p-2"
          value={form.status}
          onChange={(e) => update("status", e.target.value)}
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>

        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={form.active}
            onChange={(e) => update("active", e.target.checked)}
          />
          Active
        </label>
      </div>

      <ImageManager
        images={form.images || []}
        onChange={(val) => update("images", val)}
      />

      {/* SUBMIT */}
      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded"
        >
          Save {type}
        </button>

        <button
          type="button"
          onClick={() => window.history.back()}
          className="border px-6 py-2 rounded"
        >
          Cancel
        </button>
      </div>

    </form>
  );
}
