'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Input } from './input';
import { useRef, useState } from 'react';
import { Button } from './button';
import { Cross2Icon } from '@radix-ui/react-icons';

/**
 * Renders a search component with an input field and a reset button.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @returns {JSX.Element} The rendered search component.
 */
export default function Search({
  placeholder,
}: {
  placeholder: string;
}): JSX.Element {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const inputValue = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState(
    searchParams.get('query')?.toString() || '',
  );

  /**
   * Handles the search functionality.
   *
   * @param term - The search term.
   */
  const handleSearch = (term: string): void => {
    const params: URLSearchParams = new URLSearchParams(searchParams);

    if (term) {
      setQuery(term);
      params.set('query', term);
    } else {
      setQuery('');
      params.delete('query');
    }

    replace(`${pathName}?${params.toString()}`);
  };

  /**
   * Resets the filter by clearing the query and invoking the handleSearch function with an empty string.
   * Also clears the value of the input element if it exists.
   */
  const resetFilter = () => {
    setQuery('');
    handleSearch('');
    inputValue.current?.value && (inputValue.current.value = '');
  };

  return (
    <div className="mb-12 flex items-center gap-3">
      <Input
        type="text"
        ref={inputValue}
        placeholder={placeholder}
        className="h-9 w-full sm:w-1/2"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
      {query && (
        <Button
          size={'sm'}
          variant={'secondary'}
          onClick={resetFilter}
          className="h-8 px-2 lg:px-3"
        >
          Reset <Cross2Icon className="ml-2 size-4" />
        </Button>
      )}
    </div>
  );
}
