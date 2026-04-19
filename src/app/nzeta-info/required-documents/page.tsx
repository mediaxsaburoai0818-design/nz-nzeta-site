import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wymagane dokumenty do NZeTA — Co potrzebujesz?",
  description:
    "Lista dokumentów potrzebnych do złożenia wniosku o NZeTA: paszport, zdjęcie, adres e-mail, karta płatnicza i informacje o podróży.",
};

export default function RequiredDocumentsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "O NZeTA", href: "/nzeta-info/what-is-nzeta/" }, { label: "Wymagane dokumenty" }]} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00247D] mb-8">
          Wymagane dokumenty do wniosku NZeTA
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p>
            Przed złożeniem wniosku o NZeTA przygotuj poniższe dokumenty i informacje. Proces jest
            w pełni elektroniczny — <strong>nie musisz wysyłać żadnych dokumentów pocztą</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-[#F0F4FF] rounded-xl p-6 border border-[#E8E8E8]">
              <div className="text-3xl mb-3">🛂</div>
              <h3 className="text-lg font-bold text-[#00247D] mb-2">Ważny paszport</h3>
              <p className="text-sm text-gray-600">
                Paszport musi być ważny przez cały okres planowanego pobytu w Nowej Zelandii.
                Paszport musi być maszynowo odczytywalny (MRP).
              </p>
            </div>

            <div className="bg-[#F0F4FF] rounded-xl p-6 border border-[#E8E8E8]">
              <div className="text-3xl mb-3">📸</div>
              <h3 className="text-lg font-bold text-[#00247D] mb-2">Zdjęcie cyfrowe</h3>
              <p className="text-sm text-gray-600">
                Aktualne zdjęcie twarzy. Przy aplikacji mobilnej możesz zrobić selfie.
                Przy stronie internetowej przesyłasz plik ze zdjęciem.
              </p>
            </div>

            <div className="bg-[#F0F4FF] rounded-xl p-6 border border-[#E8E8E8]">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-lg font-bold text-[#00247D] mb-2">Adres e-mail</h3>
              <p className="text-sm text-gray-600">
                Aktywny adres e-mail, na który otrzymasz potwierdzenie NZeTA.
                Upewnij się, że masz do niego dostęp.
              </p>
            </div>

            <div className="bg-[#F0F4FF] rounded-xl p-6 border border-[#E8E8E8]">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="text-lg font-bold text-[#00247D] mb-2">Karta płatnicza</h3>
              <p className="text-sm text-gray-600">
                Visa, Mastercard lub UnionPay (UnionPay tylko przez stronę internetową)
                do opłacenia NZeTA i IVL.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Informacje wymagane we wniosku</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Dane paszportowe:</strong> imię, nazwisko, data urodzenia, numer paszportu, data wydania i ważności, kraj wydania</li>
            <li><strong>Dane kontaktowe:</strong> adres e-mail, numer telefonu</li>
            <li><strong>Informacje o podróży:</strong> cel podróży (turystyka, tranzyt, biznes)</li>
            <li><strong>Pytania zdrowotne:</strong> informacje o stanie zdrowia (np. gruźlica)</li>
            <li><strong>Pytania o karalność:</strong> informacje o ewentualnej przeszłości kryminalnej</li>
            <li><strong>Informacje o deportacji:</strong> czy kiedykolwiek byłeś deportowany z jakiegokolwiek kraju</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Wymagania dotyczące zdjęcia</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Twarz musi być wyraźnie widoczna</li>
            <li>Neutralny wyraz twarzy</li>
            <li>Tło jednolite, jasne</li>
            <li>Bez okularów przeciwsłonecznych</li>
            <li>Bez nakrycia głowy (z wyjątkiem religijnego)</li>
            <li>Zdjęcie aktualne (nie starsze niż 6 miesięcy)</li>
          </ul>

          <div className="bg-[#F0F4FF] border-l-4 border-[#00247D] p-6 rounded-r-lg mt-8">
            <h3 className="text-lg font-bold text-[#00247D] mb-2">Wskazówka</h3>
            <p>
              Przy korzystaniu z aplikacji mobilnej, zdjęcie i dane paszportu możesz zeskanować
              aparatem telefonu. To najszybszy i najtańszy sposób złożenia wniosku.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
