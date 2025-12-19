import Button from "../../ui/Button"

function UpdateItemQuantity() {
    return (
        <div className="flew items-center gap-2 md:gap-3">
            <Button type="round">
                -
            </Button>
            <span className="text-sm font-medium">current quantity</span>
            <Button type="round">
                +
            </Button>
        </div>
    )
}

export default UpdateItemQuantity
