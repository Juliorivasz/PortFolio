import { Certificate } from "../../../types/certificate";

export const OverlayCard = (certificate: Certificate) => {
  return (
    <div
      className="absolute top-0 left-0 text-center h-full w-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.65)",
      }}>
      <h3 className="text-white text-lg font-bold">{certificate.title}</h3>
      <p className="text-white text-sm">{certificate.institution}</p>
      <p
        className="text-white text-xs"
        style={{ paddingBottom: "1rem" }}>
        {certificate.issueDate}
      </p>
      <a
        href={certificate.url}
        target="_blank"
        rel="noopener noreferrer"
        className="glitch-button">
        <span>look</span>
      </a>
    </div>
  );
};
