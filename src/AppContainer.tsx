import { Dispatch } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import App from "./App";
import { CompilerPackageNames, compilerVersionCollection, getCompilerApi, hasLoadedCompilerApi, Node } from "./compiler";
import { general as generalConstants } from "./constants";
import { ApiLoadingState, OptionsState, StoreState } from "./types";
import { debounce } from "./utils";

export function mapStateToProps(state: StoreState) {
    return {
        ...state,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AllActions>) {
    const debouncedSourceFileRefresh = debounce<CompilerPackageNames>(
        compilerPackageName => updateSourceFile(compilerPackageName),
        generalConstants.sourceFileRefreshDelay,
    );

    updateSourceFile(compilerVersionCollection[0].packageName);

    return {
        onCodeChange: (compilerPackageName: CompilerPackageNames, code: string) => {
            dispatch(actions.setCode(code));
            debouncedSourceFileRefresh(compilerPackageName);
        },
        onNodeChange: (node: Node) => dispatch(actions.setSelectedNode(node)),
        onOptionsChange: (compilerPackageName: CompilerPackageNames, options: Partial<OptionsState>) => {
            const fileNeedsChanging = options.scriptKind !== undefined
                || options.scriptTarget !== undefined
                || options.compilerPackageName !== undefined
                || options.bindingEnabled !== undefined;

            dispatch(actions.setOptions(options));
            if (fileNeedsChanging)
                debouncedSourceFileRefresh(compilerPackageName);
        },
    };

    async function updateSourceFile(compilerPackageName: CompilerPackageNames) {
        const changeLoadingState = !hasLoadedCompilerApi(compilerPackageName);
        try {
            if (changeLoadingState)
                dispatch(actions.setApiLoadingState(ApiLoadingState.Loading));
            const api = await getCompilerApi(compilerPackageName);
            dispatch(actions.refreshSourceFile(compilerPackageName, api));
            if (changeLoadingState)
                dispatch(actions.setApiLoadingState(ApiLoadingState.Loaded));
        } catch (err) {
            console.error(err);
            if (changeLoadingState)
                dispatch(actions.setApiLoadingState(ApiLoadingState.Error));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
