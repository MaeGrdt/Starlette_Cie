import { Checkbox, Chip } from '@nextui-org/react';
import stars5 from '../../assets/icons/5-stars.svg';
import stars4 from '../../assets/icons/4-stars.svg';
import stars3 from '../../assets/icons/3-stars.svg';
import stars2 from '../../assets/icons/2-stars.svg';
import './style.css';

export default function Filters() {
  return (
    <>
      {/* filtre type */}
      <div className='w-60 lg:w-full mb-8'>
        {/* title */}
        <div className='bg-white p-3 rounded-xl text-center mb-2'>
          <p className='title-filtre'>Type de produit</p>
        </div>
        {/* corps */}
        <div className='px-3'>
          <div className='flex flex-row items-center justify-between gap-2 mb-3'>
            <div className='flex items-center gap-2'>
              <Checkbox color='danger' radius='sm' className='border-box'>
                <p className='label-checkbox'>Fromage</p>
              </Checkbox>
            </div>
            <Chip
              size='sm'
              classNames={{
                base: 'bg-danger-100',
              }}
            >
              00
            </Chip>
          </div>
          <div className='flex flex-row items-center justify-between gap-2'>
            <div className='flex items-center gap-2'>
              <Checkbox color='danger' radius='sm'>
                <p className='label-checkbox'>Produit Laitier</p>
              </Checkbox>
            </div>
            <Chip
              size='sm'
              classNames={{
                base: 'bg-danger-100',
              }}
            >
              00
            </Chip>
          </div>
        </div>
      </div>
      {/* filtre catégorie */}
      <div className='w-60 lg:w-full mb-8'>
        {/* title */}
        <div className='bg-white p-3 rounded-xl text-center mb-2'>
          <p className='title-filtre'>Catégorie</p>
        </div>
        {/* corps */}
        <div className='px-3'>
          <div className='flex flex-row items-center justify-between gap-2 mb-3'>
            <div className='flex items-center gap-2'>
              <Checkbox color='danger' radius='sm'>
                <p className='label-checkbox'>Chèvre</p>
              </Checkbox>
            </div>
            <Chip
              size='sm'
              classNames={{
                base: 'bg-danger-100',
              }}
            >
              00
            </Chip>
          </div>
          <div className='flex flex-row items-center justify-between gap-2 mb-3'>
            <div className='flex items-center gap-2'>
              <Checkbox color='danger' radius='sm'>
                <p className='label-checkbox'>Mixte</p>
              </Checkbox>
            </div>
            <Chip
              size='sm'
              classNames={{
                base: 'bg-danger-100',
              }}
            >
              00
            </Chip>
          </div>
          <div className='flex flex-row items-center justify-between gap-2'>
            <div className='flex items-center gap-2'>
              <Checkbox color='danger' radius='sm'>
                <p className='label-checkbox'>Vache</p>
              </Checkbox>
            </div>
            <Chip
              size='sm'
              classNames={{
                base: 'bg-danger-100',
              }}
            >
              00
            </Chip>
          </div>
        </div>
      </div>
      {/* filtre note moyenne */}
      <div className='w-60 lg:w-full mb-8'>
        {/* title */}
        <div className='bg-white p-3 rounded-xl text-center mb-2'>
          <p className='title-filtre'>Note moyenne</p>
        </div>
        {/* corps */}
        <div className='px-3'>
          {/* 5 étoiles */}
          <div className='flex flex-row items-center justify-between gap-2 mb-3'>
            <div className='flex items-center gap-2'>
              <Checkbox color='danger' radius='sm'>
                <img src={stars5} alt="icon d'étoiles" />
              </Checkbox>
            </div>
            <Chip
              size='sm'
              classNames={{
                base: 'bg-danger-100',
              }}
            >
              00
            </Chip>
          </div>
          {/* 4 étoiles */}
          <div className='flex flex-row items-center justify-between gap-2 mb-3'>
            <div className='flex items-center gap-2'>
              <Checkbox color='danger' radius='sm'>
                <img src={stars4} alt="icon d'étoiles" />
              </Checkbox>
            </div>
            <Chip
              size='sm'
              classNames={{
                base: 'bg-danger-100',
              }}
            >
              00
            </Chip>
          </div>
          {/* 3 étoiles */}
          <div className='flex flex-row items-center justify-between gap-2 mb-3'>
            <div className='flex items-center gap-2'>
              <Checkbox color='danger' radius='sm'>
                <img src={stars3} alt="icon d'étoiles" />
              </Checkbox>
            </div>
            <Chip
              size='sm'
              classNames={{
                base: 'bg-danger-100',
              }}
            >
              00
            </Chip>
          </div>
          {/* 2 étoiles */}
          <div className='flex flex-row items-center justify-between gap-2'>
            <div className='flex items-center gap-2'>
              <Checkbox color='danger' radius='sm'>
                <img src={stars2} alt="icon d'étoiles" />
              </Checkbox>
            </div>
            <Chip
              size='sm'
              classNames={{
                base: 'bg-danger-100',
              }}
            >
              00
            </Chip>
          </div>
        </div>
      </div>
      {/* filtre affinage */}
      <div className='w-60 lg:w-full mb-8'>
        {/* title */}
        <div className='bg-white p-3 rounded-xl text-center mb-2'>
          <p className='title-filtre'>Affinage</p>
        </div>
        {/* corps */}
        <div className='px-3'>
          <div className='flex flex-row items-center justify-between gap-2 mb-3'>
            <div className='flex items-center gap-2'>
              <Checkbox color='danger' radius='sm'>
                <p className='label-checkbox'>Affiné</p>
              </Checkbox>
            </div>
            <Chip
              size='sm'
              classNames={{
                base: 'bg-danger-100',
              }}
            >
              00
            </Chip>
          </div>
          <div className='flex flex-row items-center justify-between gap-2'>
            <div className='flex items-center gap-2'>
              <Checkbox color='danger' radius='sm'>
                <p className='label-checkbox'>Frais</p>
              </Checkbox>
            </div>
            <Chip
              size='sm'
              classNames={{
                base: 'bg-danger-100',
              }}
            >
              00
            </Chip>
          </div>
        </div>
      </div>
      {/* filtre enrobage */}
      <div className='w-60 lg:w-full mb-8'>
        {/* title */}
        <div className='bg-white p-3 rounded-xl text-center mb-2'>
          <p className='title-filtre'>Enrobage</p>
        </div>
        {/* corps */}
        <div className='px-3'>
          {/* Ail et Fines Herbes */}
          <div className='flex flex-row items-center justify-between gap-2 mb-3'>
            <div className='flex items-center gap-2'>
              <Checkbox color='danger' radius='sm'>
                <p className='label-checkbox'>Ail et Fines Herbes</p>
              </Checkbox>
            </div>
            <Chip
              size='sm'
              classNames={{
                base: 'bg-danger-100',
              }}
            >
              00
            </Chip>
          </div>
          {/* Bruschetta */}
          <div className='flex flex-row items-center justify-between gap-2 mb-3'>
            <div className='flex items-center gap-2'>
              <Checkbox color='danger' radius='sm'>
                <p className='label-checkbox'>Bruschetta</p>
              </Checkbox>
            </div>
            <Chip
              size='sm'
              classNames={{
                base: 'bg-danger-100',
              }}
            >
              00
            </Chip>
          </div>
          {/* Moutarde */}
          <div className='flex flex-row items-center justify-between gap-2 mb-3'>
            <div className='flex items-center gap-2'>
              <Checkbox color='danger' radius='sm'>
                <p className='label-checkbox'>Moutarde</p>
              </Checkbox>
            </div>
            <Chip
              size='sm'
              classNames={{
                base: 'bg-danger-100',
              }}
            >
              00
            </Chip>
          </div>
          {/* Multiple */}
          <div className='flex flex-row items-center justify-between gap-2 mb-3'>
            <div className='flex items-center gap-2'>
              <Checkbox color='danger' radius='sm'>
                <p className='label-checkbox'>Multiple</p>
              </Checkbox>
            </div>
            <Chip
              size='sm'
              classNames={{
                base: 'bg-danger-100',
              }}
            >
              00
            </Chip>
          </div>
          {/* Nature */}
          <div className='flex flex-row items-center justify-between gap-2 mb-3'>
            <div className='flex items-center gap-2'>
              <Checkbox color='danger' radius='sm'>
                <p className='label-checkbox'>Nature</p>
              </Checkbox>
            </div>
            <Chip
              size='sm'
              classNames={{
                base: 'bg-danger-100',
              }}
            >
              00
            </Chip>
          </div>
          {/* Pempa */}
          <div className='flex flex-row items-center justify-between gap-2'>
            <div className='flex items-center gap-2'>
              <Checkbox color='danger' radius='sm'>
                <p className='label-checkbox'>Pempa</p>
              </Checkbox>
            </div>
            <Chip
              size='sm'
              classNames={{
                base: 'bg-danger-100',
              }}
            >
              00
            </Chip>
          </div>
        </div>
      </div>
    </>
  );
}
