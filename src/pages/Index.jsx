import React from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      <header className="bg-pink-600 text-white p-4">
        <h1 className="text-2xl font-bold">My Pink Application</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4 text-pink-800">Welcome to My Pink Application</h2>
        <p className="mb-4 text-pink-700">This is a pink-themed application that you can modify and build upon.</p>
        <Button className="bg-pink-500 hover:bg-pink-600 text-white">Click me</Button>
      </main>

      <footer className="bg-pink-200 p-4 text-center text-pink-700">
        <p>&copy; 2023 My Pink Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;