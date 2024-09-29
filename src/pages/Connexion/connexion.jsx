import React from 'react';
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  Checkbox,
} from '@nextui-org/react';
import home from '../../assets/icons/icon-accueil.svg';
import { NavLink } from 'react-router-dom';
import './style.css';

export default function Connexion() {
  const [selected, setSelected] = React.useState('login');

  return (
    <>
      <div className='fondLogin overflow-hidden'>
        <div className='flex justify-center place-items-center w-full h-full'>
          <div className='absolute top-0 left-0'>
            <NavLink to='/'>
              <img src={home} alt='icon caddie' className='w-11' />
            </NavLink>{' '}
          </div>
          <Card className='max-w-full w-1/4 h-3/4 bg-danger-100 p-2 '>
            <CardBody className='overflow-hidden'>
              <Tabs
                fullWidth
                size='lg'
                aria-label='Tabs form'
                variant='light'
                className='bg-danger-50 rounded-xl mb-3'
                selectedKey={selected}
                onSelectionChange={setSelected}
              >
                <Tab key='sign-up' title='Inscription' className='py-6 m-0.5'>
                  <form className='flex flex-col gap-4'>
                    <Input
                      isRequired
                      size='lg'
                      label='Nom'
                      placeholder='Entrez votre nom'
                      type='text'
                    />
                    <Input
                      isRequired
                      size='lg'
                      label='Prénom'
                      placeholder='Entrez votre prénom'
                      type='text'
                    />
                    <Input
                      isRequired
                      size='lg'
                      label='Email'
                      placeholder='Entrez votre email'
                      type='email'
                    />
                    <Input
                      isRequired
                      size='lg'
                      label='Password'
                      placeholder='Entrez votre mot de passe'
                      type='password'
                    />
                    <p className='text-center text-small mt-8'>
                      Vous avez déjà un compte?{' '}
                      <Link
                        size='sm'
                        onPress={() => setSelected('login')}
                        className='text-danger-600 underline'
                      >
                        Se connecter
                      </Link>
                    </p>
                    <div className='flex gap-2 justify-end'>
                      <Button
                        fullWidth
                        size='lg'
                        className='bg-danger-600 text-white'
                      >
                        S&#39;inscrire
                      </Button>
                    </div>
                  </form>
                </Tab>
                <Tab
                  key='login'
                  title='Connexion'
                  color='danger'
                  className='py-6 m-0.5'
                >
                  <form className='flex flex-col gap-4 h-[300px]'>
                    <Input
                      isRequired
                      size='lg'
                      label='Email'
                      placeholder='Entrez votre email'
                      type='email'
                    />
                    <Input
                      isRequired
                      size='lg'
                      label='Password'
                      placeholder='Entrez votre mot de passe'
                      type='password'
                    />
                    <div className="grid grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Checkbox color="danger" radius="sm">
                          Se souvenir de moi
                        </Checkbox>
                      </div>
                      <div className='text-right'>
                        <Link
                          size='sm'
                          className='text-danger-600 underline text-right'
                        >
                          Mot de passe oublié?
                        </Link>
                      </div>
                    </div>
                    <p className='text-center text-small  mt-8'>
                      Vous n&#39;avez pas de compte?{' '}
                      <Link
                        size='sm'
                        onPress={() => setSelected('sign-up')}
                        className='text-danger-600 underline'
                      >
                        S&#39;inscrire
                      </Link>
                    </p>
                    <div className='flex gap-2 justify-end'>
                      <Button
                        fullWidth
                        size='lg'
                        className='bg-danger-600 text-white'
                      >
                        Connexion
                      </Button>
                    </div>
                  </form>
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
