import Modal from "@/components/DialogModal";

export default function Safebox() {
    return (
        <Modal>
            <div className="flex flex-col w-[650px] text-lg">
                <h1 className="text-2xl font-semibold py-3">Оптимизация хранения и упрощенная утилизация</h1>
                <ul className="list-disc list-inside space-y-2">
                    <li>Комплектация в стерильную упаковку создает условия безопасного хранения нужных материалов</li>
                    <li>Гарантированная возможность безопасного хранения стерильных наборов до 5 лет</li>
                    <li>Отсутствие затрат на утилизацию неиспользованных перевязочных материалов. Оптимальный, четко выверенный состав элементов набора, позволяет не создавать лишних отходов в виде элементов, взятых "на всякий случай"</li>
                    <li>Уменьшается количество утилизируемой упаковки. Так как вывоз отходов оплачивает больница, важен такой критерий как объем, который напрямую связан с затратами</li>
                </ul>
            </div>
        </Modal>
    )
}