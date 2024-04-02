import ButtonMenu from "@/components/buttons/ButtonMenu";

export default function Academy() {
    return (
        <>
            <div class="max-w-lg mx-auto p-8 relative">
                <details class="open:bg-red-500 p-6 rounded-lg transition-all duration-1000" open>
                    <summary class="text-sm leading-6 text-slate-900 font-semibold select-none">
                        Why do they call it Ovaltine?
                    </summary>
                    <div class="absolute mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        <p>The mug is round. The jar is round. They should call it Roundtine.</p>
                    </div>
                </details>
            </div>
        </>
    )
}