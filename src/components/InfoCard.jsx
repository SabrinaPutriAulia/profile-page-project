import { EditButtonOrange, EditButtonGray } from "./EditButton";

export default function InfoCard({
  title,
  data,
  onEdit,
  useGrayButton = false,
}) {
  return (
    <div className="bg-white shadow rounded-2xl p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg text-primary">{title}</h3>
        {useGrayButton ? (
          <EditButtonGray onClick={onEdit} />
        ) : (
          <EditButtonOrange onClick={onEdit} />
        )}
      </div>

      {/* Garis pemisah horizontal */}
      <hr className="border-t border-gray-200 my-4 border-1" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
        {data.map((item, index) => (
          <div key={index}>
            <p className="font-medium text-grayDark">{item.label}</p>
            <p className="text-grayLight break-words truncate">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
