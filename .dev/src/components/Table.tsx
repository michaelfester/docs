import { ReactNode } from "react";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

export default function Table({ children }: { children: ReactNode[] }) {
  const [thead, tbody] = children;

  //   console.log({ thead, tbody });

  console.log((thead as any).props.children.props.children);

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="not-prose min-w-full divide-y divide-gray-300">
            {(thead as any).props.children.props.children.map(item => (
              <th
                scope="col"
                className="w-[520px] py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                {item}
              </th>
            ))}
            {/* <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                >
                  Role
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead> */}
            {/* <tbody className="divide-y divide-gray-200">
              {people.map(person => (
                <tr key={person.email}>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-0">
                    {person.name}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {person.title}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {person.email}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {person.role}
                  </td>
                  <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-0">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit<span className="sr-only">, {person.name}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
}
