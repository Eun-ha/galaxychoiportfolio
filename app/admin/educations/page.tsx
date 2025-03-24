import { getCertificatesData } from "@/backend/resume-actions";
import { CreateData, DeleteData, EditData } from "@/components/admin/buttons";
import { BoundaryButton } from "@/components/ui/boundary-button";

export default async function Page() {
  const data = await getCertificatesData();

  return (
    <div>
      <div>
        <BoundaryButton>
          <CreateData />
        </BoundaryButton>
      </div>
      <div className="overflow-x-auto">
        <p>educations</p>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                name
              </th>
              <th className="px-6 py-3text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                date
              </th>
              <th className="px-6 py-3text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                authority
              </th>
              <th className="px-6 py-3text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                버튼
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.map((data, id) => (
              <tr key={id}>
                <td className="px-6 py-4 whitespace-no-wrap">{data.id}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{data.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{data.date}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {data.authority}
                </td>

                <td>
                  <BoundaryButton>
                    {data.id && <EditData id={data.id} />}
                    {data.id && <DeleteData id={data.id} />}
                  </BoundaryButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
