type ShowResultsProps = {
  page?: number
  total?: number
}

export const ShowResults = ({ page = 0, total = 0 }: ShowResultsProps) => (
  <p 
    className="-mt-2 text-muted-foreground text-sm font-medium"
    aria-live="polite"
  >
    Page {page} of {total}
  </p>
)