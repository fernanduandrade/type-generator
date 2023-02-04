type Left<L> = { kind: 'left'; leftValue: L }
type Right<R> = { kind: 'right'; rightValue: R }

type EitherValue<L, R> = Left<L> | Right<R>

export class Either<L, R> {
    private constructor(private readonly value: EitherValue<L, R>) {}
    
    static left<L, R> (value: L) {
        return new Either<L,R>({kind: 'left', leftValue: value})
    }

    static right<L, R> (value: R) {
        return new Either<L,R>({kind: 'right', rightValue: value})
    }

    isLeft(): boolean {
        return this.value.kind === 'left'
    }

    isRight(): boolean {
        return this.value.kind === 'right'
    }

    fold<T>(leftFn: (left: L) => T, rightFn: (right: R) => T): T {
        return this.value.kind === 'left' 
            ? leftFn(this.value.leftValue)
            : rightFn(this.value.rightValue)
    }

    flatMap<T>(fn: (right:R) => Either<L, T>): Either<L, T> {
        return this.fold(
            leftValue => Either.left(leftValue),
            rightValue => fn(rightValue),
        )
    }

    flatMapLeft<T>(fn : (left: L) => Either<T, R>): Either<T, R> {
        return this.fold(
            leftValue => fn(leftValue),
            rightValue => Either.right(rightValue)
        )
    }

    map<T>(fn: (right: R) => T): Either<L, T> {
        return this.flatMap(right => Either.right(fn(right)))
    }

    mapLeft<T>(fn: (left: L) => T): Either<T, R> {
        return this.flatMapLeft(left => Either.left(fn(left)))
    }

    get(erroMessage?: string) {
        return this.getOrThrow(erroMessage)
    }

    getOrThrow(errorMessage?: string) {
        const throwFn = () => {
            throw Error(
                errorMessage ? errorMessage : `An error has ocurred while retrieving value: ${this.value}`
            )
        }

        return this.fold(
            () => throwFn(),
            rightValue => rightValue
        )
    }

    getLeft(): L {
        const throwFn = () => {
            throw Error('The value is right: ' + JSON.stringify(this.value));
        };

        return this.fold(
            leftValue => leftValue,
            () => throwFn()
        );
    }

    getOrElse(defaultValue: R): R {
        return this.fold(
            () => defaultValue,
            someValue => someValue
        );
    }

}