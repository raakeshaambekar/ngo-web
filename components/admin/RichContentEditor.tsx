"use client";

export default function RichContentEditor({
  label,
  value,
  onChange,
}: {
  label: string;
  value: any[];
  onChange: (val: any[]) => void;
}) {
  function updateBlock(index: number, newBlock: any) {
    const copy = [...value];
    copy[index] = newBlock;
    onChange(copy);
  }

  function addBlock(type: "paragraph" | "list") {
    onChange([
      ...value,
      type === "paragraph"
        ? { type: "paragraph", value: "" }
        : { type: "list", value: [""] },
    ]);
  }

  function removeBlock(index: number) {
    onChange(value.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-4">
      <label className="font-semibold">{label}</label>

      {value.map((block, index) => (
        <div key={index} className="border p-4 rounded bg-gray-50">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">
              {block.type.toUpperCase()}
            </span>
            <button
              type="button"
              onClick={() => removeBlock(index)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </div>

          {block.type === "paragraph" && (
            <textarea
              className="w-full border p-2"
              rows={4}
              value={block.value}
              onChange={(e) =>
                updateBlock(index, {
                  type: "paragraph",
                  value: e.target.value,
                })
              }
            />
          )}

          {block.type === "list" && (
            <div className="space-y-2">
              {block.value.map((item: string, i: number) => (
                <input
                  key={i}
                  className="w-full border p-2"
                  value={item}
                  onChange={(e) => {
                    const newList = [...block.value];
                    newList[i] = e.target.value;
                    updateBlock(index, {
                      type: "list",
                      value: newList,
                    });
                  }}
                />
              ))}

              <button
                type="button"
                onClick={() =>
                  updateBlock(index, {
                    type: "list",
                    value: [...block.value, ""],
                  })
                }
                className="text-sm text-blue-600"
              >
                + Add list item
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => addBlock("paragraph")}
          className="border px-4 py-1 rounded"
        >
          + Paragraph
        </button>

        <button
          type="button"
          onClick={() => addBlock("list")}
          className="border px-4 py-1 rounded"
        >
          + List
        </button>
      </div>
    </div>
  );
}
