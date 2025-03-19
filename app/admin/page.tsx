import { getCertificatesData } from "@/backend/resume-actions";
import { BoundaryButton } from "@/components/ui/boundary-button";
import Link from "next/link";

export default async function Page() {
  const data = await getCertificatesData();

  console.log(data);
  return (
    <div>
      <div>
        <BoundaryButton>
          <Link href="/admin/create" aria-label="Link to create form">
            create
          </Link>
        </BoundaryButton>
      </div>
      <div className="overflow-x-auto">
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
                    <Link
                      href={`/admin/${data.id}`}
                      aria-label={`Link to ${data.id}`}
                    >
                      수정
                    </Link>
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
