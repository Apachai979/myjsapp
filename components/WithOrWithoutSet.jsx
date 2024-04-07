'use client'
import { useRef, useState } from "react"
import Block from "./Block"

export default function WithOrWithoutSet() {
    const [open, setOpen] = useState(true)
    const blockRef = useRef()
    const [height, setHeight] = useState('')

    function handleClick() {
        console.log(blockRef.current)
        console.log('just REF: ', blockRef.current.clientHeight)
        setOpen(prev => !prev)
        setHeight(' mt-[' + blockRef.current.clientHeight + 'px] ')
        console.log(height)
    }

    return (
        <Block>
            <div className="">
                <div className=" flex max-w-[750px] justify-between items-center mx-auto px-10 py-4 bg-slate-200 ">
                    <h1 className="text-2xl font-semibold">Подготовка комплекта принадлежностей</h1>
                    <button onClick={handleClick} className="relative flex justify-center items-center w-6 h-6 z-30">
                        <div className=" absolute h-6 w-0.5 bg-primary_green"></div>
                        <div className=" absolute h-0.5 w-6 bg-primary_green"></div>
                    </button>
                </div>
                <div className="relative max-w-[750px] mx-auto ">
                    <div ref={blockRef} className="absolute top-0  max-w-[750px] mx-auto bg-slate-200 px-14  text-xl  -z-10">
                        <p>Чтобы самостоятельно подготовить нужный набор для проведения процедуры, накрыть перевязочный стол, медсестра должна укомплектовать его определенным количеством инструментов и привязочных материалов, в правильном порядке расположить их в укладке. Перед этим часть перевязочных материалов (салфетки, тампоны) медсестры должны еще самостоятельно изготовить. Очевидно, что большую роль при этом играют профессиональный навык и отточенность действий специалиста. Все перевязочные материалы должны быть нужного размера и в нужном количестве.</p>
                        <p>Готовый же процедурный набор нужно только достать и открыть. Все материалы и инструменты вынимаются сразу из упаковки в заданном процедурой порядке. Сама упаковка дополнительно выполняет роль емкости для растворов, значит - не требуется отдельных контейнеров.</p>

                    </div>
                    <hr className={open ? "w-full bg-night_green h-0.5 max-w-[750px] mx-auto transition-transform duration-500 " :
                        `w-full bg-night_green h-0.5 max-w-[750px] mx-auto transition-transform duration-500 ${height}`} />
                </div>

            </div>
            <div className="">
                <div className=" flex max-w-[750px] justify-between items-center mx-auto px-10 py-4 bg-slate-200 ">
                    <h1 className="text-2xl font-semibold">Подготовка комплекта принадлежностей</h1>
                    <button onClick={handleClick} className="relative flex justify-center items-center w-6 h-6">
                        <div className=" absolute h-6 w-0.5 bg-primary_green"></div>
                        <div className=" absolute h-0.5 w-6 bg-primary_green"></div>
                    </button>
                </div>
                <div className="max-w-[750px] px-10 mx-auto bg-slate-200 h-[500px] text-xl hidden">
                    <p>Чтобы самостоятельно подготовить нужный набор для проведения процедуры, накрыть перевязочный стол, медсестра должна укомплектовать его определенным количеством инструментов и привязочных материалов, в правильном порядке расположить их в укладке. Перед этим часть перевязочных материалов (салфетки, тампоны) медсестры должны еще самостоятельно изготовить. Очевидно, что большую роль при этом играют профессиональный навык и отточенность действий специалиста. Все перевязочные материалы должны быть нужного размера и в нужном количестве.</p>
                    <p>Готовый же процедурный набор нужно только достать и открыть. Все материалы и инструменты вынимаются сразу из упаковки в заданном процедурой порядке. Сама упаковка дополнительно выполняет роль емкости для растворов, значит - не требуется отдельных контейнеров.</p>
                </div>
                <hr className="w-full bg-night_green h-0.5 max-w-[750px] mx-auto" />
            </div>
            <p className="bg-stone-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ullam reprehenderit delectus porro minus? Id accusantium dolorem illo reprehenderit soluta! Nostrum dolore omnis tempora fugit eveniet quisquam nesciunt aliquam suscipit!
                Voluptatem magnam recusandae temporibus obcaecati necessitatibus error voluptas, mollitia perspiciatis corrupti natus odio culpa, fuga explicabo dolor repellat! Vero commodi eveniet quas laboriosam libero aspernatur laborum, perferendis ea nemo reprehenderit.
                Eaque, recusandae velit distinctio error animi consectetur quae necessitatibus accusamus, facere repudiandae, tenetur aut laboriosam non. Nostrum, minus mollitia a earum aliquam nisi eos at ad et aliquid accusantium repellendus.
                Minus eveniet rem tenetur explicabo sint possimus debitis, expedita id quisquam laudantium, optio cumque ipsa accusamus voluptatum, ab eum illum vero esse consequatur laborum dolorum libero voluptatem fuga! Corrupti, vel!
                Ullam illum, exercitationem vitae molestiae dicta esse voluptatem dolorem error blanditiis, numquam cum delectus, voluptatum reiciendis autem iusto itaque officia nemo nesciunt commodi reprehenderit! Vitae eius autem voluptatum modi a.
                Temporibus voluptates, cumque debitis dicta nam quas ratione ullam voluptatibus nemo libero, sequi porro. Temporibus, quaerat dolore vero corporis tempora libero, impedit consequuntur praesentium incidunt facilis, sapiente quod repellendus iste?
                Maxime ipsam neque, voluptatibus repellendus officia in expedita impedit, necessitatibus illum temporibus corrupti consequatur praesentium exercitationem iure esse a sit error consequuntur rerum. Veniam quisquam, qui delectus laboriosam ea blanditiis.
                Recusandae impedit obcaecati nostrum perferendis dolore. Tempore, sequi, saepe quae aspernatur necessitatibus cumque consequuntur perspiciatis modi ea eveniet corporis fuga explicabo temporibus, illum laudantium ducimus est labore ipsa commodi esse?
                Dicta harum similique maiores placeat mollitia iste rem, modi quisquam non consequatur libero ratione! Ex consequatur, aut ratione in quisquam nam voluptas, eum eius fugit, dolorum nihil dolorem enim laboriosam.
                Debitis, necessitatibus temporibus eius non corrupti placeat facilis quae quaerat? Quos, voluptatibus. Aliquid quibusdam autem quis porro recusandae dicta officia laudantium quisquam optio soluta, a esse vel labore iure impedit.
                Amet neque alias vel iure dolorem, eligendi iste voluptas tempore soluta assumenda nam quisquam similique minus nemo quae ratione sint distinctio enim fugit labore rerum cupiditate dignissimos sunt ab. Fuga.
                Adipisci fugit, temporibus neque, officiis maxime laudantium maiores suscipit odio numquam totam praesentium quae, quasi nulla aut incidunt voluptatem dolorum deleniti. Placeat sed doloribus at totam quibusdam eos delectus deleniti!
                Necessitatibus reiciendis labore adipisci ea tenetur et quia, vero quos eveniet optio totam velit praesentium voluptates illo excepturi magni rerum impedit explicabo itaque, dolore quasi possimus neque, asperiores commodi! Ratione.
                Iusto sit cum laborum alias eveniet totam corrupti fugit accusamus esse asperiores dolore praesentium, placeat quibusdam quaerat blanditiis iure ducimus officiis deserunt ipsa illum ab explicabo officia harum. Error, dolores.
                Corporis suscipit omnis amet aperiam? Voluptates sit commodi, praesentium eos blanditiis non impedit. Reprehenderit, id illum. Dolore placeat sit fugit eos laborum dolorum laudantium temporibus ratione hic. Ipsam, quidem architecto?
                Placeat doloremque rem quidem aperiam ab dicta eveniet ducimus aliquam similique distinctio fugiat expedita dignissimos harum, ratione quos quas voluptatem minima, et veniam animi nesciunt asperiores dolorum optio sit. Dolorum!
                Rem incidunt quo asperiores quidem eaque modi et, ipsum similique recusandae quisquam optio harum libero temporibus nostrum dicta, dignissimos obcaecati, quas sunt tenetur reiciendis sed consequuntur impedit nulla! Impedit, maxime!
                Voluptates quas aspernatur voluptatem accusamus! Dolorum temporibus cumque inventore distinctio quasi animi suscipit? Possimus tenetur quas, commodi enim, odit beatae vitae pariatur reprehenderit unde odio officiis! Eaque officia neque doloremque?
                Qui sunt cumque facilis fugiat ipsam quisquam inventore ab quis saepe perspiciatis sequi culpa repellendus veniam odit iure molestiae atque harum, temporibus tempora. Facere magni excepturi accusamus amet, assumenda neque.
                Provident laborum voluptates id voluptatem sed eius officiis nam distinctio in animi aliquid amet sequi quia assumenda, beatae reiciendis dolor veniam quo dolorem! Est accusamus tempora fugit non in eaque.
                Ratione modi dolores tenetur repellendus minima, nostrum voluptas fugit voluptatibus pariatur accusamus eveniet, cumque excepturi, similique magnam saepe sit nisi mollitia ipsam perspiciatis. Necessitatibus, dolores similique ullam nobis non eveniet.
                Cupiditate voluptatum dolores similique, aliquam doloribus voluptate quia, reprehenderit aspernatur sint aliquid eius ipsum optio sit animi ipsa enim cum accusamus. Nostrum illo iure unde quisquam voluptas voluptate atque accusantium.
                Quasi tempore quia tenetur, eveniet quos nulla eos fugiat quod, illo explicabo, obcaecati sit? Aliquid, sequi beatae, ad sint magnam ullam libero enim delectus mollitia laudantium nam quam dolore veritatis.
                Reprehenderit alias non maxime provident, est laborum, vero rem tenetur fugiat iusto autem molestias, labore in illo praesentium ut nesciunt magnam excepturi aliquid pariatur? Veniam, labore. Beatae molestias quaerat nostrum!
                Hic enim animi omnis deleniti nobis unde veritatis eaque alias, soluta pariatur dolores rerum cupiditate ab officia nam mollitia dolor ipsum sit molestiae inventore, explicabo fugit totam vitae amet. Hic?
                Totam, fuga placeat. Doloremque dolore sunt culpa id necessitatibus laborum, saepe mollitia animi eius incidunt aspernatur deserunt. Minus, natus? Repudiandae unde rem quam dolores debitis. Quaerat nemo nihil tempora porro?
                Assumenda harum eius eum aliquid minima quod modi asperiores sint facilis aliquam pariatur, ex labore sequi eos commodi, repellat nisi quibusdam sunt laboriosam consectetur. Excepturi culpa expedita quo modi quis.
                Explicabo quaerat ipsam quas nostrum dignissimos, ab eos, impedit vero dolor dolore, sunt deleniti? Dolor impedit sed architecto expedita omnis nesciunt, recusandae quisquam eos, exercitationem placeat porro iure perspiciatis sit!
                Necessitatibus aliquid suscipit repellendus fugiat alias similique non autem eveniet dolorum, corporis nihil, eum, accusamus molestiae. Perferendis quam nobis sapiente ea ipsum? Corporis cum, ratione debitis velit iure sunt laboriosam.
                Suscipit totam quo tempore itaque dolor quia, non praesentium est nihil laudantium doloribus aliquam eligendi. Ratione modi ut facere illum, vero laborum molestias, aperiam aut consequatur, accusamus inventore eveniet beatae.
                Repellat, vero consequatur temporibus perferendis delectus ipsa distinctio soluta autem sint saepe vitae dolor doloribus atque vel porro ab? Corrupti corporis expedita ipsum? Saepe alias, tempore quia amet provident fuga?
                Obcaecati explicabo, est veniam ab voluptas itaque ipsum rerum minima? Facilis sit dolorem porro provident. Debitis, non veniam! Aut sit iusto necessitatibus perspiciatis error dolorum rem. Amet quae debitis laborum.
                Autem amet, consequatur id expedita excepturi architecto laborum eligendi a doloribus, nisi, minus eaque repudiandae. Illo nam inventore nihil cumque, quos soluta quaerat ea delectus impedit quae dolore hic! Ut?
                Soluta magni voluptatum quod assumenda optio similique ullam nulla nisi atque, et deleniti vel modi maxime labore voluptas facilis odit velit rerum. Quia soluta consequuntur molestiae dolore a voluptatibus corporis.
                Iure rem vitae cum dolore culpa delectus porro repellendus hic! Modi doloremque culpa dolore quos fugit odit, qui, earum provident quia architecto omnis quibusdam odio maxime repellendus dolor possimus non.
                Enim magnam ratione quo et nesciunt soluta ea blanditiis aliquam, facilis nam, iste architecto, temporibus molestiae sapiente similique ullam repellat nemo accusantium pariatur? Culpa officiis repellat facere dicta rerum atque.
                Rerum harum nostrum blanditiis, nihil suscipit ullam. Dolor ut natus iusto! Reiciendis, aspernatur rem earum excepturi eligendi assumenda, nobis eius maiores rerum perspiciatis est in recusandae cumque asperiores ipsa perferendis?
                Labore molestias sunt, officiis officia omnis consequuntur, odit, doloribus eligendi numquam iste voluptas. Necessitatibus beatae ab temporibus nihil aperiam, sint repellat odio provident autem vel illo fugit asperiores distinctio magnam.
                Soluta fuga et placeat consectetur cumque? Dicta, aliquid veniam. Sapiente qui laudantium expedita unde nesciunt maiores iste dolor consequatur tempore temporibus? Nihil, nesciunt. Recusandae deleniti possimus fugiat pariatur quod at.
                Doloremque eveniet ex magnam quasi fugiat illo earum cum nam distinctio minus! Quaerat voluptatem beatae ducimus enim a voluptatibus facilis? Amet deserunt culpa temporibus repellendus, magni reiciendis officia architecto odit.
                Unde praesentium porro, quisquam ipsa incidunt sequi? Error non cumque nemo nulla illo ab iure tenetur ipsa officiis dolorum ullam accusamus, voluptatem fugiat ad in, nihil natus facilis cum officia.
                Dolores laboriosam dolore cumque tempore, in fugit ducimus! Magni odit, aspernatur ullam atque alias accusantium quod quas vel tempora veniam esse eos iusto minus enim sapiente vero fugiat aperiam illo?
                Impedit fuga saepe cumque facere id quos ea, sapiente explicabo, reprehenderit, harum delectus similique minus reiciendis voluptatem? Aut nesciunt, iusto soluta similique temporibus optio facere ea facilis esse dolorum. Tempora.
                Adipisci aliquid ullam libero voluptate eaque sequi tempore modi mollitia commodi doloribus tempora fuga error beatae quod aspernatur, sunt delectus sint architecto sed assumenda odio soluta deserunt minima fugiat. Temporibus.
                Rerum eos, sint veniam odio nesciunt deleniti repudiandae a. Soluta veniam repellendus corporis impedit, laudantium veritatis consectetur, doloribus quo fugiat fugit laboriosam vel rerum, porro ullam id quia vitae voluptatem.
                Dolor numquam ipsa amet neque officia totam impedit, repudiandae, adipisci fuga, iure doloremque possimus soluta nobis. Distinctio, atque maxime reprehenderit veritatis reiciendis earum non in nemo beatae fuga, culpa iusto!
                Praesentium facere incidunt ipsam amet accusamus ab natus minima quos alias voluptate mollitia eveniet veniam dolorem magni possimus cupiditate, quaerat, delectus dignissimos molestias, quasi officiis excepturi error? Aliquam, praesentium provident!
                Temporibus amet neque dignissimos minus id commodi qui, dolore facere dolorum natus consequatur praesentium officiis ratione sit assumenda fugiat voluptatibus obcaecati distinctio voluptatem. Excepturi eveniet vero debitis, rerum voluptate at.
                Atque quibusdam, ducimus architecto, iure id hic explicabo error quis tempora at deserunt itaque culpa animi eveniet voluptatem dolores sed nostrum enim? Ratione hic quo, consequatur in esse atque repellendus?
                Sed deleniti nemo, animi quam minima maiores, debitis temporibus iure aperiam culpa nihil quo aliquid cum repudiandae illo neque enim, odit quod consequuntur nostrum ea vitae iste. Dolore, ducimus aliquam.
                Nisi dolorum architecto repellendus ipsum? Dolor veritatis ducimus molestiae deserunt et nihil laboriosam odit neque obcaecati labore! Ipsam odit magni animi, voluptatibus rem, quasi molestiae fugiat deserunt qui eum corrupti?
                Corporis porro voluptatem saepe at odit, eos possimus mollitia vero assumenda necessitatibus! Veritatis, mollitia quam ab labore ducimus blanditiis eligendi eaque, recusandae saepe provident odit sint explicabo. Vitae, mollitia veniam.
                Doloremque necessitatibus dolorum nemo incidunt id nesciunt natus! Optio et eum, ut, iste eaque exercitationem unde molestias consectetur autem dignissimos at labore, ipsam harum enim soluta doloremque quisquam! Neque, nesciunt?
                Sed beatae animi a exercitationem distinctio voluptatibus earum, nemo, eveniet fuga vitae corrupti ea non debitis commodi sapiente qui, aut harum. Eligendi iste doloremque quibusdam nam asperiores sint quasi? Illo.
                At delectus, veritatis nisi sed voluptatum quam necessitatibus nam aperiam ratione quis magnam esse voluptatem, doloribus dolores laboriosam facere mollitia ea labore exercitationem, maxime a consequatur vitae architecto. Excepturi, est.
                Fuga, neque iusto. Sapiente saepe natus, delectus veritatis dolor totam velit quasi quisquam iusto aliquid, minima blanditiis unde deserunt provident dignissimos esse ipsam sed vitae illo? Atque dolorem unde quam.
                Voluptatem dolore nulla quae impedit iure? Ab odio temporibus voluptatum eligendi soluta facilis? Dolor, numquam consectetur officia pariatur veniam impedit itaque aut nisi facere harum animi! Quam inventore tenetur molestias!
                Cumque cum fuga explicabo blanditiis labore adipisci similique in tempore. Voluptatum explicabo nulla, delectus laborum placeat reprehenderit ab cumque vel voluptatibus asperiores corrupti pariatur ipsa ut. Nemo cum molestias ipsam!
                Suscipit nam iusto enim deleniti esse excepturi a debitis itaque delectus maiores quam quas doloremque quibusdam ad, minus iure cumque optio mollitia totam! Quidem saepe dolore delectus laudantium voluptatum sint!
                Provident amet beatae delectus alias? Nulla id odit cumque saepe magnam, dolorem quam ab, fugiat aliquam facilis aut accusamus ea eligendi ipsa voluptatum qui. Fugit dolor modi cumque nam repellat.
                Sequi culpa enim autem atque, quidem earum doloremque odio, modi repudiandae, aut numquam nostrum debitis iusto voluptates. Placeat suscipit quos culpa et ab in! Debitis minima odit inventore recusandae accusantium.
                Libero saepe reiciendis corporis ab vitae, fugit laborum. Nisi cumque quibusdam dolor sunt quam labore sequi ipsam quo quidem cum facere, quos dicta, nobis laboriosam voluptas est eligendi, deserunt temporibus.
                Fuga accusamus aperiam veritatis quae vel atque similique officiis sed fugiat eius odio minima est cupiditate, veniam nesciunt impedit nemo? Facilis veniam atque recusandae placeat porro dicta obcaecati, expedita cum?
                Id reprehenderit nesciunt eum repudiandae similique, labore dolores distinctio commodi, enim ratione, minima consequuntur officiis! Similique natus laboriosam cumque eum laborum. Inventore beatae voluptatem, sed mollitia sunt quam exercitationem veniam.
                Quaerat tempora deserunt voluptatibus iure, culpa voluptas aliquid earum eveniet hic dolorum nobis dolore libero dicta provident nostrum quisquam quasi tenetur doloremque amet labore maxime sunt excepturi sint. Iusto, voluptatem.
                Nesciunt, aut a? Exercitationem at nihil rerum illum delectus architecto adipisci ab tenetur non beatae? Nihil hic suscipit neque omnis? Voluptates reprehenderit aliquid fugiat! Rerum ad consequatur laborum suscipit! Quasi.
                Suscipit, eligendi dolores ducimus rem nemo odit facere deserunt maiores recusandae eum error obcaecati pariatur ipsam dolorum, molestias voluptate repellendus at libero magnam? Aperiam culpa, sit quod similique non omnis!
                Alias nemo recusandae amet. Unde minima consequatur asperiores, laboriosam sapiente, consequuntur ducimus fugit repellat eius qui dignissimos dolorem soluta aliquid quia odio saepe cumque deleniti amet, praesentium ea veniam. Odio!
                Minima et nesciunt, aliquid, quia cupiditate fugiat, ab alias labore voluptatum fugit iste? Odio corrupti error molestias velit. Quaerat magni quasi culpa eos delectus quisquam laboriosam repellat voluptate asperiores consectetur.
                Itaque officiis quibusdam quo tempora suscipit minima. Esse eaque aperiam perferendis nemo fugiat error alias sequi sed blanditiis vero nam laboriosam deserunt aliquid laudantium ex quia at, dolores, obcaecati optio.
                Dolorum blanditiis enim perspiciatis eius illo! Quam, a cumque quaerat quasi laborum laboriosam ipsam laudantium nesciunt doloribus quibusdam accusamus voluptas necessitatibus sit itaque fuga qui? Voluptatem placeat fugit velit amet?
                Porro fuga necessitatibus eligendi dicta quod saepe dolorem quasi, error deleniti velit expedita deserunt beatae magni neque iste accusamus commodi vitae est architecto. Nulla magni maxime eaque. Aperiam, officia enim.
                Dolore ut at maxime cupiditate, explicabo dolores ratione quaerat incidunt id eos deleniti tempore optio adipisci nostrum harum quo fugit ipsa mollitia suscipit nihil laboriosam accusamus. Vel dicta saepe officiis?
                Dolore facilis tempora dicta velit quo aspernatur expedita ullam accusantium quae molestias. Voluptatem omnis quod unde ipsam officia aperiam molestias, quas consequuntur, ullam quia minima vitae molestiae similique facilis rerum?
                Molestiae minus asperiores eius officiis mollitia eligendi temporibus, repellendus obcaecati tempore quae dolore iste neque quaerat deserunt, animi culpa expedita nesciunt eos consectetur autem. A ducimus itaque officiis excepturi perferendis?
                Aliquam dolor saepe sint, placeat voluptatem sapiente consectetur voluptatibus exercitationem natus nam obcaecati laudantium soluta laborum consequatur voluptatum iste illo. Magni iure nostrum magnam commodi architecto. Odit saepe ipsam velit?
                Doloribus amet laudantium nostrum dicta obcaecati et dolorum totam itaque, officia ducimus alias ex corporis ut iure dolorem, odio repellendus eaque dolor id nobis repudiandae beatae magni ratione? Odio, magnam?
                Accusantium, rerum officia recusandae ducimus error fuga perferendis minima facilis in! Cumque quis, ea amet ipsum illo vitae temporibus sapiente accusantium animi sed error velit officiis quidem vel pariatur ducimus.
                Accusamus quis quos, expedita unde officia nostrum sed laudantium doloremque facilis omnis culpa minus reiciendis hic inventore quam aut numquam distinctio magnam quibusdam illo. In fuga at provident corporis quibusdam.
                Repellendus doloremque, non quod incidunt est voluptates aliquid ut atque eaque nesciunt vero ab ducimus sit molestiae dolorem illo voluptas ea provident quisquam obcaecati aperiam error sequi doloribus! Veritatis, ipsum!
                Maxime sit totam sed ducimus dolor magni natus officiis molestias? Officiis cupiditate excepturi sed. Explicabo suscipit fugit veritatis eveniet, minima autem optio ducimus, porro dolor quo minus laudantium cupiditate laboriosam.
                Dolorem quasi, hic facere harum neque eligendi reprehenderit voluptas asperiores numquam, sequi adipisci deserunt saepe eum omnis libero consequatur incidunt. Maiores enim commodi corrupti veritatis voluptatibus architecto natus esse quae.
                Laborum, iste veniam minus doloribus ipsum perferendis dignissimos consequuntur accusantium nesciunt molestias! Possimus sapiente animi inventore odit illum nostrum eos eaque laudantium eligendi eum. Vero tenetur dolores placeat voluptatem dolorem.
                Commodi quidem repellat, facilis et cupiditate corporis, enim iste dolorem in cumque molestias, sint mollitia neque eaque nostrum a rem earum? Sint sunt voluptates commodi adipisci dolorum totam veniam velit.
                Adipisci maxime nobis doloribus, nemo molestias similique quaerat accusamus veritatis saepe sequi debitis aliquid eveniet corporis, dolores error modi dolore ut quo perferendis voluptas eius harum nisi! Animi, nulla quia.
                Repudiandae laboriosam est doloribus ad placeat, cumque sequi harum voluptatibus officiis nostrum in molestias exercitationem blanditiis delectus perferendis neque veritatis eligendi nobis expedita velit corporis quasi. Qui ratione laudantium architecto?
                Accusantium, ex sed! Eveniet ad voluptates, accusantium voluptatem aperiam, nihil corrupti quis ex exercitationem alias, a tempora sed sunt sit laborum earum reiciendis! Quae ipsum exercitationem voluptate vel ab provident?
                Tempora, eum reprehenderit facere iure blanditiis commodi. Dolorum architecto neque dolor eligendi ad iure veritatis, quod, harum reprehenderit nemo cupiditate tempore nobis repellendus, deserunt voluptate. Cupiditate velit ab accusantium illo.
                Facere consequuntur, suscipit perferendis rerum incidunt officia deserunt amet ut expedita pariatur veniam sequi. Velit nulla quo omnis veritatis, ipsa non atque assumenda molestiae amet soluta mollitia ea quis laudantium!
                In blanditiis vero neque! A, voluptates. Magni ipsum quis eius neque delectus cumque vel cum sequi, optio consectetur corporis officia fuga excepturi minus earum ullam ipsam, rem iusto quibusdam magnam!
                A incidunt aliquid beatae vero praesentium corporis adipisci alias similique unde earum facilis ea laboriosam ullam sit perferendis, temporibus dolorem voluptatibus ex est possimus nulla fugiat voluptas. Nesciunt, reprehenderit cupiditate.
                Aliquam perspiciatis, enim quasi laborum voluptatibus quaerat harum impedit tenetur illum fuga facilis atque laboriosam nam vero illo, aut neque corrupti magni veniam eaque, nisi necessitatibus? Porro nobis suscipit tempora?
                Sed quibusdam minima aspernatur unde officiis laboriosam quisquam consequatur consectetur error quo architecto voluptatum delectus totam, corrupti sapiente modi officia accusantium, qui adipisci sit? Aliquam dignissimos architecto at optio fuga!
                Praesentium totam eligendi ipsam provident eaque. Reiciendis laborum cupiditate eveniet nemo quae praesentium placeat id incidunt, ad, libero veniam? Quam facere porro suscipit possimus debitis necessitatibus aspernatur nulla minus culpa!
                Reiciendis, distinctio. Error eum pariatur debitis deleniti ducimus doloribus dolore sapiente cum, blanditiis temporibus obcaecati vitae dicta voluptate. Aliquid, doloribus porro. Cumque, doloremque? Distinctio aliquam cupiditate dolor facere, corporis nesciunt?
                Minima non itaque quasi culpa? Possimus ipsa alias minima nobis, cumque distinctio! Saepe quas adipisci inventore, quis aut corrupti libero harum architecto odit, minima iure cupiditate non aperiam. Necessitatibus, quidem.
                Explicabo consectetur, esse voluptate quis, quasi libero perspiciatis dolores molestias officia aperiam magnam odio dolorem obcaecati natus? Adipisci excepturi numquam veniam voluptatum doloribus recusandae culpa totam quibusdam error, similique quod.
                Ut, rerum alias! Hic, vel labore velit maxime, accusamus minima aliquid laborum, praesentium ex possimus laboriosam reiciendis vero doloremque! Et, eos mollitia? Voluptate similique quam voluptatem inventore impedit nam. Saepe!
                Tempore suscipit ullam veritatis sequi animi earum quae? Accusantium, praesentium magni! Numquam id excepturi eos repellendus, est expedita rem eligendi libero. Officiis in modi vitae laudantium nam asperiores alias accusantium.
                Voluptates officiis aliquid quo amet dolore odio temporibus dolor? Facilis illo veniam deleniti minus nostrum, fugiat voluptates fugit a officia quis voluptate recusandae doloremque corporis maiores iusto voluptatum distinctio quos.</p>

        </Block>
    )
}