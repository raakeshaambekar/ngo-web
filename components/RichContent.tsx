export default function RichContent({
  content,
}: {
  content: Array<{
    type: string;
    value: any;
  }>;
}) {
  return (
    <div className="space-y-6">
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="text-gray-700 leading-relaxed">
                {block.value}
              </p>
            );

          case "list":
            return (
              <ul
                key={index}
                className="list-disc pl-6 text-gray-700 space-y-2"
              >
                {block.value.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}