import { upperCase } from 'upper-case';

function InitModule(ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, initializer: nkruntime.Initializer) {
    initializer.registerRpc('test_rpc', handleTestRpc);
    logger.info('TypeScript module loaded.');
}

function handleTestRpc(ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama) {
    const userId = upperCase(ctx.userId);
    logger.info('test_rpc userid:', userId);
    return userId;
}

// Reference InitModule to avoid it getting removed on build
!InitModule && InitModule.bind(null);
