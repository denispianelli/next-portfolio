import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';

/**
 * Renders a code element with highlighted syntax.
 *
 * @param children - The code content to be highlighted.
 * @param props - Additional props to be spread to the code element.
 * @returns The rendered code element with highlighted syntax.
 */
function Code({ children, ...props }: any) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
  code: Code,
  // Add any other components you want to render here.
};

/**
 * Renders the MDX content.
 *
 * @param props - The props for the MDX content component.
 * @returns The rendered MDX content.
 */
export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps,
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
