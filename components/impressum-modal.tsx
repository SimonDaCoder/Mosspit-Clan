"use client";

import { X } from "lucide-react";

interface ImpressumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ImpressumModal({ isOpen, onClose }: ImpressumModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-xl max-h-[90vh] w-full max-w-2xl overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-zinc-900 flex justify-between items-center p-6 border-b border-zinc-200 dark:border-zinc-800">
          <h1 className="text-3xl font-bold">Impressum</h1>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 text-left space-y-4">
          <div>
            <p className="text-lg mb-2">Angaben gemäß § 5 DDG:</p>
            <br />
            <p className="text-lg mb-2">dergrosehd</p>
            <p className="text-lg mb-2">c/o IP-Management #30177</p>
            <p className="text-lg mb-2">Ludwig-Erhard-Str. 18</p>
            <p className="text-lg mb-2">204599 Hamburg</p>
          </div>

          <div>
            <p className="text-2xl font-bold mb-2">Kontakt</p>
            <p className="text-lg mb-2">
              E-Mail:{" "}
              <a
                className="text-blue-500 hover:text-blue-600 underline"
                href="mailto:mail@dergrosehd.de"
              >
                mail@dergrosehd.de
              </a>
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold mb-2">EU-Streitschlichtung</p>
            <p className="text-lg mb-2">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                className="text-blue-500 hover:text-blue-600 underline"
                href="https://consumer-redress.ec.europa.eu/index_de"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://consumer-redress.ec.europa.eu/index_de
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold mb-2">Haftungsausschluss</p>
            <p className="text-lg mb-2">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
