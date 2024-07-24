import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Star, Sparkles, Party, Confetti } from 'lucide-react';

const FunButton = ({ children, icon: Icon }) => (
  <Button className="bg-pink-500 hover:bg-pink-600 text-white m-2 transform transition-transform duration-200 hover:scale-110">
    <Icon className="mr-2" size={20} />
    {children}
  </Button>
);

const Index = () => {
  const [confettiCount, setConfettiCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 animate-gradient-x">
      <header className="bg-pink-600 text-white p-6 text-center">
        <h1 className="text-4xl font-bold animate-bounce">
          My Super Fun Pink App! <Party className="inline-block ml-2" />
        </h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-pink-800 animate-pulse">
          Welcome to the Funnest App Ever!
        </h2>
        <p className="mb-6 text-pink-700 text-lg">
          Get ready for an explosion of pink fun! Click the buttons below to experience the joy!
        </p>
        <div className="flex flex-wrap justify-center">
          <FunButton icon={Heart}>Spread Love</FunButton>
          <FunButton icon={Star}>Make a Wish</FunButton>
          <FunButton icon={Sparkles}>Add Magic</FunButton>
          <FunButton icon={Confetti} onClick={() => setConfettiCount(prev => prev + 1)}>
            Throw Confetti
          </FunButton>
        </div>
        <div className="mt-8">
          {Array.from({ length: confettiCount }).map((_, index) => (
            <Confetti
              key={index}
              className="text-pink-500 inline-block animate-fall"
              style={{
                position: 'relative',
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </main>

      <footer className="bg-pink-300 p-4 text-center text-pink-800">
        <p className="animate-pulse">
          &copy; 2023 My Super Fun Pink App. All rights reserved. <Heart className="inline-block ml-1" />
        </p>
      </footer>
    </div>
  );
};

export default Index;