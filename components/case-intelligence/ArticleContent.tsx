interface ArticleContentProps {
  htmlContent: string;
}

export function ArticleContent({ htmlContent }: ArticleContentProps) {
  return (
    <article
      className="article-content max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
