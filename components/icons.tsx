import type { SVGProps } from "react"
import {
  siDotnet,
  siNextdotjs,
  siTailwindcss,
  siSharp,
  siJavascript,
  siPostgresql,
  siSwagger,
  siReact,
  siPython,
} from "simple-icons"

type BrandIconProps = SVGProps<SVGSVGElement> & {
  title?: string
}

function SimpleIcon({
  icon,
  title,
  ...props
}: BrandIconProps & {
  icon: {
    title: string
    path: string
  }
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d={icon.path} />
    </svg>
  )
}

export const Icons = {
  dotnet: (props: BrandIconProps) => (
    <SimpleIcon icon={siDotnet} title=".NET" {...props} />
  ),
  nextdotjs: (props: BrandIconProps) => (
    <SimpleIcon icon={siNextdotjs} title="Next.js" {...props} />
  ),
  tailwindcss: (props: BrandIconProps) => (
    <SimpleIcon icon={siTailwindcss} title="Tailwind Css" {...props} />
  ),
  sharp: (props: BrandIconProps) => (
    <SimpleIcon icon={siSharp} title="Sharp" {...props} />
  ),
  javascript: (props: BrandIconProps) => (
    <SimpleIcon icon={siJavascript} title="Javascript" {...props} />
  ),
  postgresql: (props: BrandIconProps) => (
    <SimpleIcon icon={siPostgresql} title="Postgresql" {...props} />
  ),
  swagger: (props: BrandIconProps) => (
    <SimpleIcon icon={siSwagger} title="Swagger" {...props} />
  ),
  react: (props: BrandIconProps) => (
    <SimpleIcon icon={siReact} title="React" {...props} />
  ),
  python: (props: BrandIconProps) => (
    <SimpleIcon icon={siPython} title="Python" {...props} />
  ),
}