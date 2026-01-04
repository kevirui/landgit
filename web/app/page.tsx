export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary">
      {/* Main Hello World Section */}
      <main className="text-center space-y-12 px-8">
        {/* Hero */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold font-primary text-black tracking-tight">Hello World</h1>
          <p className="text-xl font-secondary text-black/70">
            Bienvenido al Design System de{' '}
            <span className="text-secondary font-semibold">LandGit</span>
          </p>
        </div>

        {/* Color Palette Showcase */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold font-primary text-black">🎨 Paleta de Colores</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Primary */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-xl bg-primary border-2 border-black/10 shadow-lg" />
              <span className="font-tertiary text-sm text-black">Primary</span>
              <code className="text-xs text-black/60">#f0efe7</code>
            </div>
            {/* Secondary */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-xl bg-secondary shadow-lg" />
              <span className="font-tertiary text-sm text-black">Secondary</span>
              <code className="text-xs text-black/60">#f14e32</code>
            </div>
            {/* Tertiary */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-xl bg-tertiary shadow-lg" />
              <span className="font-tertiary text-sm text-black">Tertiary</span>
              <code className="text-xs text-black/60">#0388a6</code>
            </div>
            {/* White */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-xl bg-white border-2 border-black/10 shadow-lg" />
              <span className="font-tertiary text-sm text-black">White</span>
              <code className="text-xs text-black/60">#eeeeee</code>
            </div>
            {/* Black */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-xl bg-black shadow-lg" />
              <span className="font-tertiary text-sm text-black">Black</span>
              <code className="text-xs text-black/60">#000000</code>
            </div>
          </div>
        </section>

        {/* Font Showcase */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold font-primary text-black">🔤 Tipografías</h2>
          <div className="flex flex-col gap-6 max-w-2xl mx-auto">
            {/* Poppins */}
            <div className="p-6 bg-white/50 rounded-xl border border-black/10">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm font-tertiary text-tertiary">Primary Font</span>
                <span className="text-xs text-black/50">Poppins</span>
              </div>
              <p className="text-3xl font-primary text-black">
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-lg font-primary text-black/70 mt-2">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
              </p>
            </div>

            {/* Mona Sans */}
            <div className="p-6 bg-white/50 rounded-xl border border-black/10">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm font-tertiary text-tertiary">Secondary Font</span>
                <span className="text-xs text-black/50">Mona Sans</span>
              </div>
              <p className="text-3xl font-secondary text-black">
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-lg font-secondary text-black/70 mt-2">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
              </p>
            </div>

            {/* Monaspace */}
            <div className="p-6 bg-white/50 rounded-xl border border-black/10">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm font-tertiary text-tertiary">Tertiary Font (Code)</span>
                <span className="text-xs text-black/50">Monaspace Neon</span>
              </div>
              <p className="text-2xl font-tertiary text-black">
                const greeting = &quot;Hello, LandGit!&quot;;
              </p>
              <p className="text-lg font-tertiary text-black/70 mt-2">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
              </p>
            </div>
          </div>
        </section>

        {/* Buttons Example */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold font-primary text-black">🔘 Botones de Ejemplo</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-secondary text-white font-primary font-medium rounded-xl hover:bg-accent-hover transition-colors shadow-lg">
              Botón Primario
            </button>
            <button className="px-6 py-3 bg-tertiary text-white font-primary font-medium rounded-xl hover:bg-highlight-hover transition-colors shadow-lg">
              Botón Secundario
            </button>
            <button className="px-6 py-3 bg-black text-white font-primary font-medium rounded-xl hover:bg-black/80 transition-colors shadow-lg">
              Botón Oscuro
            </button>
            <button className="px-6 py-3 bg-white text-black font-primary font-medium rounded-xl border-2 border-black/10 hover:border-secondary transition-colors shadow-lg">
              Botón Outline
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 text-sm font-secondary text-black/50">
          <p>
            Design System implementado para{' '}
            <span className="text-secondary font-medium">LandGit</span> •{' '}
            <span className="font-tertiary">2026</span>
          </p>
        </footer>
      </main>
    </div>
  );
}
