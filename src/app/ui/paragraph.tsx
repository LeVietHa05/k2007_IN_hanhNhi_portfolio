

import { montserrat } from "./fonts"

export default function Paragraph({ text, customClass }: {
    text: string,
    customClass?: string
}) {
    return (
      <p
        className={`${montserrat.className}  text-gray-200 leading-8 ${customClass}`}>
        {text}
      </p>
    );
}