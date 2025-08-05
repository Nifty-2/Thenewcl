'use client';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const term = searchParams.get('term') || '';

  const updateFilter = (key, value) => {
    const platform = key === 'platform' ? value : searchParams.get('platform') || 'android';
    const affluence = key === 'affluence' ? value : searchParams.get('affluence') || 'AF1';
    router.push(`?term=${term}&platform=${platform}&affluence=${affluence}`);
  };

  return (
    <div>
      <select onChange={(e) => updateFilter('platform', e.target.value)} defaultValue="android">
        <option value="android">Android</option>
        <option value="ios">iOS</option>
        <option value="web">Web</option>
      </select>

      <select onChange={(e) => updateFilter('affluence', e.target.value)} defaultValue="AF1">
        {['AF1','AF2','AF3','AF4','AF5','AF6'].map((af) => (
          <option key={af} value={af}>{af}</option>
        ))}
      </select>
    </div>
  );
}